import { describe, expect } from 'vitest';

import css, {
  styleObjectToCss,
  buildStyleString,
  createWrapperStyles,
} from '~/util/ui/css';

const styles = {
  // prettier-ignore
  simple: css`
color: tomato;
/* block comment
  color: blue;
*/
// inline comment
padding: 16px;
@media (min-width: 320px) {
  color: peru;
  
  .my-class {
    color: rebeccapurple;
  }
}
.my-class {
  display: block;
  color: black;
}
#my-id {
  font-size: 16px;
}
div {
  padding: 8px;
}
`,

  // prettier-ignore
  withAlias: css`
color: black;
background-color: white;
line-height: 1.25;

& {
  font-size: 14px;
}

&.-danger {
  color: red;
  background-color: blue;
}
body.safari & {
  color: green;
}
body.safari & .foo {
  color: yellow;
}
`,
};

describe('css', () => {
  describe('css#createWrapperStyles', () => {
    it('converts simple css', () => {
      // prettier-ignore
      const expected =
        css`.wrapper-css-1fcxz3l{color:tomato;}.wrapper-css-1fcxz3l{padding:16px;}@media (min-width: 320px){.wrapper-css-1fcxz3l{color:peru;}.wrapper-css-1fcxz3l .my-class{color:rebeccapurple;}}.wrapper-css-1fcxz3l .my-class{display:block;color:black;}.wrapper-css-1fcxz3l #my-id{font-size:16px;}.wrapper-css-1fcxz3l div{padding:8px;}`;
      const actual = createWrapperStyles(styles.simple);

      expect(actual.className).toEqual('wrapper-css-1fcxz3l');
      expect(actual.styles).toEqual(expected);
    });

    it('handles the "&" by replacing with the class name', () => {
      // prettier-ignore
      const expected =
        css`.wrapper-css-guholg{color:black;}.wrapper-css-guholg{background-color:white;}.wrapper-css-guholg{line-height:1.25;}.wrapper-css-guholg{font-size:14px;}.wrapper-css-guholg.-danger{color:red;background-color:blue;}body.safari .wrapper-css-guholg{color:green;}body.safari .wrapper-css-guholg .foo{color:yellow;}`;
      const actual = createWrapperStyles(styles.withAlias);

      expect(actual.className).toEqual('wrapper-css-guholg');
      expect(actual.styles).toEqual(expected);
    });

    it('handles multiple "&" by replacing with the class name', () => {
      // prettier-ignore
      const expected = css`.wrapper-css-2h0trv.foo+.wrapper-css-2h0trv.foo{margin-top:2px;}`;
      // prettier-ignore
      const actual = createWrapperStyles(css`&.foo + &.foo { margin-top: 2px}`);

      expect(actual.className).toEqual('wrapper-css-2h0trv');
      expect(actual.styles).toEqual(expected);
    });

    it('handles an array of styles and respect order overrides', () => {
      // prettier-ignore
      const input = [css`color: black;`, css`color: red;`]
      // prettier-ignore
      const expected = css`.wrapper-css-cdx3ob{color:black;}.wrapper-css-cdx3ob{color:red;}`;
      const actual = createWrapperStyles(input);

      expect(actual.className).toEqual('wrapper-css-cdx3ob');
      expect(actual.styles).toEqual(expected);
    });

    it('handles an array of styles with aliases', () => {
      // prettier-ignore
      const expected =
        css`.wrapper-css-n8ks34{color:tomato;}.wrapper-css-n8ks34{padding:16px;}@media (min-width: 320px){.wrapper-css-n8ks34{color:peru;}.wrapper-css-n8ks34 .my-class{color:rebeccapurple;}}.wrapper-css-n8ks34 .my-class{display:block;color:black;}.wrapper-css-n8ks34 #my-id{font-size:16px;}.wrapper-css-n8ks34 div{padding:8px;}.wrapper-css-n8ks34{color:black;}.wrapper-css-n8ks34{background-color:white;}.wrapper-css-n8ks34{line-height:1.25;}.wrapper-css-n8ks34{font-size:14px;}.wrapper-css-n8ks34.-danger{color:red;background-color:blue;}body.safari .wrapper-css-n8ks34{color:green;}body.safari .wrapper-css-n8ks34 .foo{color:yellow;}`;
      const actual = createWrapperStyles([styles.simple, styles.withAlias]);

      expect(actual.className).toEqual('wrapper-css-n8ks34');
      expect(actual.styles).toEqual(expected);
    });

    it('returns null when given something falsey', () => {
      // prettier-ignore
      const expected = null;
      let actual = createWrapperStyles(null);
      expect(actual).toEqual(expected);

      actual = createWrapperStyles();
      expect(actual).toEqual(expected);

      actual = createWrapperStyles('');
      expect(actual).toEqual(expected);

      actual = createWrapperStyles([]);
      expect(actual).toEqual(expected);

      actual = createWrapperStyles([null, undefined, '', 0]);
      expect(actual).toEqual(expected);
    });

    it('wraps a multi part rule even when one part already contains the class name', () => {
      const input = css`
        .form-group,
        &.form-group {
          margin-bottom: 24px;
        }
      `;
      // prettier-ignore
      const expected = css`.wrapper-css-z66qlw .form-group,.wrapper-css-z66qlw.form-group{margin-bottom:24px;}`;
      const actual = createWrapperStyles(input);
      expect(actual.styles).toEqual(expected);
    });
  });

  describe('css#styleObjectToCss', () => {
    it('converts a simple style object to a string', () => {
      const input = { fontSize: '8px', backgroundColor: 'rgba(1,2,3,.5)' };
      // prettier-ignore
      const expected = css`font-size: 8px; background-color: rgba(1,2,3,.5);`;
      const actual = styleObjectToCss(input);
      expect(actual).toEqual(expected);
    });
  });

  describe('css#buildStyleString', () => {
    it('can build a style string from an array of strings', () => {
      const tablet = '@media (min-width: 1025px)';
      // prettier-ignore
      const complex = css`${tablet} { .foo { color: green; } }`;
      const input = ['.foo { color: red; }', complex];
      // prettier-ignore
      const expected =
        css`.foo { color: red; } @media (min-width: 1025px) { .foo { color: green; } }`;
      const actual = buildStyleString(input);
      expect(actual).toEqual(expected);
    });

    it('can build a style string from an array of strings and objects', () => {
      const input = ['.foo { color: red; }', { 'font-size': '8px' }];
      // prettier-ignore
      const expected = css`.foo { color: red; } font-size: 8px;`;
      const actual = buildStyleString(input);
      expect(actual).toEqual(expected);
    });

    it('returns empty string when given something falsey', () => {
      // prettier-ignore
      const expected = '';
      let actual = buildStyleString(null);
      expect(actual).toEqual(expected);

      actual = buildStyleString();
      expect(actual).toEqual(expected);

      actual = buildStyleString('');
      expect(actual).toEqual(expected);

      actual = buildStyleString([]);
      expect(actual).toEqual(expected);

      actual = buildStyleString([null, undefined, '', 0]);
      expect(actual).toEqual(expected);
    });
  });
});
