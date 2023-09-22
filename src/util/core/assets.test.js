import {
  getAssetCoverSize,
  getCloudinaryUrl,
  getCloudinaryVersion,
  stripCloudinaryUrl,
  getOptimizedVideo,
} from './assets';
import expectedOptimizedUrls from '~/__tests__/data/optimized-video-urls.json';
import {
  getCloudinaryTransformData,
  setCloudinaryTransforms,
  updateCloudinaryTransforms,
} from '../vendor/cloudinary';

const cdn = `https://res.cloudinary.com`;
const clouds = {
  qa: 'snbr-qa',
  staging: 'snbr-stg',
  prod: 'sleepnumber',
};

const version = getCloudinaryVersion();

describe('getCloudinaryUrl generates proper URLs for each environment', () => {
  test('Local', async () => {
    const url = getCloudinaryUrl({
      url: '/dist/images/foobar.jpg',
      env: 'local',
    });
    expect(url).toEqual('/dist/images/foobar.jpg');
  });

  test('QA', async () => {
    const url = getCloudinaryUrl({ url: '/dist/images/foobar.jpg', env: 'qa' });
    expect(url).toEqual(
      `${cdn}/${clouds.qa}/image/upload/f_auto,q_auto:eco/${version}/uploads/dist/images/foobar.jpg`
    );
  });

  test('Staging', async () => {
    const url = getCloudinaryUrl({
      url: '/dist/images/foobar.jpg',
      env: 'staging',
    });
    expect(url).toEqual(
      `${cdn}/${clouds.staging}/image/upload/f_auto,q_auto:eco/${version}/uploads/dist/images/foobar.jpg`
    );
  });

  test('Production', async () => {
    const url = getCloudinaryUrl({
      url: '/dist/images/foobar.jpg',
      env: 'prod',
    });
    expect(url).toEqual(
      `${cdn}/${clouds.prod}/image/upload/f_auto,q_auto:eco/${version}/uploads/dist/images/foobar.jpg`
    );
  });

  test('uses correct upload mapping for remix', async () => {
    const config = 'image/upload/f_auto,q_auto:eco';
    const path = `/build/_assets/full_width_DT_Lightbox_m7_45_2x-276WKUGS.jpg`;
    const url = getCloudinaryUrl({ url: path, env: 'prod' });

    const expected = `${cdn}/${clouds.prod}/${config}/${version}/uploads-remix${path}`;
    expect(url).toEqual(expected);
  });
});

describe('util/assets.js', () => {
  test('getAssetCoverSize', async () => {
    // Cover a 200x200 box with different size images

    const div = document.createElement('div');
    document.body.appendChild(div);
    vi.spyOn(div, 'clientWidth', 'get').mockImplementation(() => 200);
    vi.spyOn(div, 'clientHeight', 'get').mockImplementation(() => 200);

    const asset = new Image();
    // Test 200x100
    vi.spyOn(asset, 'width', 'get').mockImplementation(() => 200);
    vi.spyOn(asset, 'height', 'get').mockImplementation(() => 100);

    let cover = await getAssetCoverSize(asset, div);
    expect(cover.width).toBe(400);
    expect(cover.height).toBe(200);

    // Test 100x200
    vi.spyOn(asset, 'width', 'get').mockImplementation(() => 100);
    vi.spyOn(asset, 'height', 'get').mockImplementation(() => 200);

    cover = await getAssetCoverSize(asset, div);
    expect(cover.width).toBe(200);
    expect(cover.height).toBe(400);

    // Test 50x50
    vi.spyOn(asset, 'width', 'get').mockImplementation(() => 50);
    vi.spyOn(asset, 'height', 'get').mockImplementation(() => 50);

    cover = await getAssetCoverSize(asset, div);
    expect(cover.width).toBe(200);
    expect(cover.height).toBe(200);

    // Test 1600x900
    vi.spyOn(asset, 'width', 'get').mockImplementation(() => 1600);
    vi.spyOn(asset, 'height', 'get').mockImplementation(() => 900);

    cover = await getAssetCoverSize(asset, div);
    expect(Math.ceil(cover.width)).toBe(356);
    expect(cover.height).toBe(200);
  });

  test('stripCloudinaryUrl', async () => {
    const testUrls = [
      'https://res.cloudinary.com/snbr-qa/video/upload/c_limit,q_auto:eco,w_768,vc_vp9/v1/workarea/content/assets/l3tu9r0otltkseoechnp.mp4',
      'https://cdn.sleepnumber.com/video/upload/vc_auto/v1/workarea/content/assets/n0wznr08b72f3oa0lkon.mp4',
      'https://cdn.sleepnumber.com/video/upload/ac_none/vc_auto/v1/workarea/content/assets/jdzkftjlc4jxdxcpor0g',
    ];
    const expectedUrls = [
      'https://res.cloudinary.com/snbr-qa/video/upload/v1/workarea/content/assets/l3tu9r0otltkseoechnp',
      'https://cdn.sleepnumber.com/video/upload/v1/workarea/content/assets/n0wznr08b72f3oa0lkon',
      'https://cdn.sleepnumber.com/video/upload/ac_none/v1/workarea/content/assets/jdzkftjlc4jxdxcpor0g',
    ];

    const stripped = testUrls.map(stripCloudinaryUrl);

    expect(stripped).toEqual(expectedUrls);
  });

  test('getOptimizedVideo', async () => {
    const testUrls = [
      'https://res.cloudinary.com/snbr-qa/video/upload/c_limit,q_auto:eco,w_768,vc_vp9/v1/workarea/content/assets/l3tu9r0otltkseoechnp.mp4',
      'https://cdn.sleepnumber.com/video/upload/vc_auto/v1/workarea/content/assets/n0wznr08b72f3oa0lkon.mp4',
      'https://cdn.sleepnumber.com/video/upload/ac_none/vc_auto/v1/workarea/content/assets/jdzkftjlc4jxdxcpor0g',
    ];

    const optimized = {
      desktop: testUrls.map(url => getOptimizedVideo(url, 2000)),
      mobile: testUrls.map(url => getOptimizedVideo(url, 300)),
    };

    const { desktop, mobile } = expectedOptimizedUrls;

    optimized.desktop.forEach((set, i) => {
      const ex = desktop[i];
      set.forEach((ms, j) => {
        expect(ms.src).toEqual(ex[j].src);
        expect(ms.type).toEqual(ex[j].type);
      });
    });
    optimized.mobile.forEach((set, i) => {
      const ex = mobile[i];
      set.forEach((ms, j) => {
        expect(ms.src).toEqual(ex[j].src);
        expect(ms.type).toEqual(ex[j].type);
      });
    });
  });

  test('getCloudinaryTransformData', async () => {
    const url =
      'https://cdn.sleepnumber.com/video/upload/ar_1,c_fill,h_768,so_auto,co_black,e_colorize:40/f_auto/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg';
    const expected = [
      'ar_1',
      'c_fill',
      'h_768',
      'so_auto',
      'co_black',
      'e_colorize:40',
      'f_auto',
    ];
    const data = getCloudinaryTransformData(url);

    expect(data.transforms).toEqual(expected);
    expect(data.start).toBe(41);
    expect(data.end).toBe(96);
    expect(data.prefix).toBe('https://cdn.sleepnumber.com/video/upload/');
    expect(data.suffix).toBe(
      '/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg'
    );
  });

  test('setCloudinaryTransforms', async () => {
    const url =
      'https://cdn.sleepnumber.com/video/upload/ar_1,c_fill,h_768,so_auto,co_black,e_colorize:40/f_auto/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg';
    const expected =
      'https://cdn.sleepnumber.com/video/upload/so_42,co_red/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg';

    const actual = setCloudinaryTransforms(url, ['so_42', 'co_red']);
    expect(actual).toBe(expected);
  });

  test('updateCloudinaryTransforms', async () => {
    const url =
      'https://cdn.sleepnumber.com/video/upload/ar_1,c_fill,h_768,so_auto,co_black,e_colorize:40/f_auto/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg';
    const expected =
      'https://cdn.sleepnumber.com/video/upload/ar_1,c_limit,h_768,so_42,co_black,e_colorize:40,f_auto/v1/workarea/catalog/product_videos/lyocell-ultra-sheets-set/gallery_video_1.jpg';

    const actual = updateCloudinaryTransforms(url, ['so_42', 'c_limit']);
    expect(actual).toBe(expected);
  });
});
