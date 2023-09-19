import * as moduleConstants from './constants';
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

const CLOUD_NAMES = {
  qa: 'snbr-qa',
  staging: 'snbr-stg',
  prod: 'sleepnumber',
};

describe('getCloudinaryUrl generates proper URLs for each environment', () => {
  beforeEach(() => {
    delete window.location; // Let us set our own location
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('Local', async () => {
    window.location = new URL('https://sleepnumber.test');
    vi.spyOn(moduleConstants, 'isDevelopment').mockImplementationOnce(
      () => true
    );

    const url = getCloudinaryUrl('/dist/images/foobar.jpg');
    expect(url).toEqual('/dist/images/foobar.jpg');
  });

  test('QA', async () => {
    window.location = new URL('https://qa.sleepnumber.com');

    const url = getCloudinaryUrl('/dist/images/foobar.jpg');
    expect(url).toEqual(
      `https://res.cloudinary.com/${
        CLOUD_NAMES.qa
      }/image/upload/f_auto,q_auto:eco/${getCloudinaryVersion()}/uploads/dist/images/foobar.jpg`
    );
  });

  test('Staging', async () => {
    window.location = new URL('https://staging.sleepnumber.com');
    window.sn_globals.config.wa_env = 'staging';

    const url = getCloudinaryUrl('/dist/images/foobar.jpg');
    expect(url).toEqual(
      `https://res.cloudinary.com/${
        CLOUD_NAMES.staging
      }/image/upload/f_auto,q_auto:eco/${getCloudinaryVersion()}/uploads/dist/images/foobar.jpg`
    );
  });

  test('Production', async () => {
    window.location = new URL('https://www.sleepnumber.com');

    const url = getCloudinaryUrl('/dist/images/foobar.jpg');
    expect(url).toEqual(
      `https://res.cloudinary.com/${
        CLOUD_NAMES.prod
      }/image/upload/f_auto,q_auto:eco/${getCloudinaryVersion()}/uploads/dist/images/foobar.jpg`
    );
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
