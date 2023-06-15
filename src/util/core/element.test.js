import React, { useEffect, useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import {
  gebi,
  getElement,
  isElement,
  qsa,
  qs,
  closest,
  addClass,
  removeClass,
  after,
  before,
  append,
  prepend,
  contains,
  remove,
  css,
  text,
  html,
  create,
  hasClass,
  toggleClass,
  index,
  is,
  next,
  nextAll,
  prev,
  prevAll,
  siblings,
  findWithRetry,
  addTabindexToContent,
  addListeners,
  removeListeners,
  trigger,
} from './element';

const test_html = `
<div id="root">
  <header id="header" class="page-header">header</header>
  <div class="page-body">
    <span class="foo">foo</span>
    <div class="parent parent-1">
      <div class="child child-1">
        <div class="grandchild grandchild-1">grandchild</div>
      </div>
    </div>
    <div class="parent parent-2">
      <div class="child child-2">
        <div class="grandchild grandchild-2">grandchild</div>
      </div>
    </div>
    <ul class="list">
      <li class="item item-1">item 1</li>
      <li class="item item-2">item 2</li>
      <li class="item item-3">item 3</li>
      <li class="item item-4">item 4</li>
      <li class="item item-5">item 5</li>
    </ul>
    <div class="earth outer-earth">
      <div class="earth middle-earth">
        <div class="earth inner-earth">
          <span id="frodo" class="frodo">baggins</span>
        </div>
      </div>
    </div>
    <div class="content">
      some content
      <button id="btn">click me</button>
      <a href="#footer">link to footer</a>
    </div>
  </div>
  <footer id="footer">footer</footer>
</div>
`;

describe('element.js', () => {
  beforeEach(() => {
    document.body.innerHTML = test_html;
  });

  test('util/element.isElement', () => {
    const element = getElement('.foo');
    expect(isElement(element)).toBe(true);
    expect(isElement(element.childNodes[0])).toBe(true);
    expect(isElement('foo')).toBe(false);
  });

  test('util/element.getElement', () => {
    const element = getElement('.foo');
    expect(element).toBeTruthy();
    expect(element).toHaveClass('foo');
  });

  test('util/element.gebi', () => {
    const element = gebi('root');
    expect(element).toBeTruthy();
    expect(element.id).toBe('root');
  });

  test('util/element.qsa', () => {
    const elements = qsa('.grandchild');
    expect(Array.isArray(elements)).toBe(true);
    expect(elements).toHaveLength(2);
    const last = elements[elements.length - 1];
    expect(last).toHaveClass('grandchild');

    const parent2 = document.querySelector('.parent-2');
    const within = qsa(parent2, '.grandchild');
    expect(Array.isArray(within)).toBe(true);
    expect(within).toHaveLength(1);
    expect(within[0]).toHaveClass('grandchild-2');
    expect(parent2).toContainElement(within[0]);
  });

  test('util/element.qs', () => {
    const element = qs('.grandchild');
    expect(Array.isArray(element)).toBe(false);
    expect(element).toHaveClass('grandchild-1');
    expect(element).not.toHaveClass('grandchild-2');

    const parent2 = document.querySelector('.parent-2');
    const within = qs(parent2, '.grandchild');
    expect(Array.isArray(within)).toBe(false);
    expect(within).toHaveClass('grandchild-2');
    expect(parent2).toContainElement(within);
  });

  test('util/element.closest', () => {
    let element = closest('.frodo', '.earth');
    expect(element).toHaveClass('earth');
    expect(element).toHaveClass('inner-earth');
    expect(element).not.toHaveClass('middle-earth');

    const frodo = document.getElementById('frodo');
    element = closest(frodo, '.earth');
    expect(element).toHaveClass('earth');
    expect(element).toHaveClass('inner-earth');
    expect(element).not.toHaveClass('middle-earth');

    expect(closest('.frodo', '.non-existent-class')).toBeNull();
  });

  test('util/element.addClass', () => {
    const element = addClass('.frodo', 'hobbit');
    expect(element).toHaveClass('hobbit');
  });

  test('util/element.removeClass', () => {
    const element = removeClass('.parent.parent-1', 'parent-1');
    expect(element).toHaveClass('parent');
    expect(element).not.toHaveClass('parent-1');
  });

  test('util/element.after', () => {
    const p2 = getElement('.parent.parent-2');
    const p3 = p2.cloneNode(true);
    p3.classList.remove('parent-2');
    p3.classList.add('parent-3');
    after(p2, p3);
    expect(p2.nextElementSibling === p3).toBe(true);
  });

  test('util/element.before', () => {
    const p1 = getElement('.parent.parent-1');
    const p0 = p1.cloneNode(true);
    p0.classList.remove('parent-1');
    p0.classList.add('parent-0');
    before(p1, p0);
    expect(p1.previousElementSibling === p0).toBe(true);
  });

  test('util/element.append', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const favorite = document.createElement('div');
    favorite.classList.add('child');
    favorite.classList.add('child-favorite');
    append(p1, favorite);
    const last = p1.childNodes[p1.childNodes.length - 1];
    expect(last === favorite).toBe(true);
    expect(last).toHaveClass('child-favorite');
  });

  test('util/element.prepend', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const favorite = document.createElement('div');
    favorite.classList.add('child');
    favorite.classList.add('child-favorite');
    prepend(p1, favorite);
    const first = p1.childNodes[0];
    expect(first === favorite).toBe(true);
    expect(first).toHaveClass('child-favorite');
  });

  test('util/element.contains', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const child = p1.childNodes[0];
    expect(contains(p1, child)).toBe(true);
  });

  test('util/element.remove', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const originalChildCount = p1.childNodes.length;
    const child = document.querySelector('.parent.parent-1 .child-1');

    expect(p1.contains(child)).toBe(true);
    remove(child);
    expect(p1.contains(child)).toBe(false);
    expect(p1.childNodes).toHaveLength(originalChildCount - 1);
  });

  test('util/element.css', () => {
    const p1 = document.querySelector('.parent.parent-1');
    p1.style.backgroundColor = 'red';

    expect(p1).toHaveStyle({backgroundColor:'red'});
    expect(css(p1, 'background-color')).toBe('red');
    expect(css(p1, 'backgroundColor')).toBe('red');

    css(p1, 'background-color', '#06c');
    expect(p1).toHaveStyle({backgroundColor:'rgb(0, 102, 204)'});

    css(p1, 'backgroundColor', '#369');
    expect(p1).toHaveStyle({backgroundColor:'rgb(51, 102, 153)'});
  });

  test('util/element.text', () => {
    const p1 = document.getElementById('frodo');
    expect(text(p1)).toBe('baggins');
    text(p1, 'simpson');
    expect(p1).toHaveTextContent('simpson');
  });

  test('util/element.html', () => {
    const inner = document.querySelector('.earth.inner-earth');
    const sam = '<span id="samwise" class="samwise">gamgee</span>';
    html(inner, sam);
    expect(inner.innerHTML).toMatch(sam);
    expect(inner.childNodes[0]).toHaveClass('samwise');
  });

  test('util/element.create', () => {
    const created = create(
      '<div class="pops">pops<span class="junior">junior</span></div>'
    );
    expect(created).toHaveClass('pops');
    expect(created.childElementCount).toBe(1);
    expect(created).toHaveTextContent(/pops/);
    expect(created.querySelector('.junior')).toBeTruthy();
    expect(created.querySelector('.junior')).toHaveTextContent('junior');
  });

  test('util/element.hasClass', () => {
    const p = document.querySelector('.parent.parent-1');
    expect(hasClass(p, 'parent-1')).toBe(true);
    expect(hasClass(p, 'parent-2')).toBe(false);
  });

  test('util/element.toggleClass', () => {
    const p = document.querySelector('.parent.parent-1');
    toggleClass(p, 'parent-1');
    toggleClass(p, 'parent-2');
    expect(p).toHaveClass('parent-2');
    expect(p).not.toHaveClass('parent-1');
  });

  test('util/element.index', () => {
    const item2 = document.querySelector('.list .item-2');
    expect(index(item2)).toBe(1);
    expect(index('#im-not-here')).toBe(-1);
  });

  test('util/element.is', () => {
    const item2 = document.querySelector('.list .item-2');
    expect(is(item2, '.item')).toBe(true);
    expect(is(item2, 'li')).toBe(true);
    expect(is(item2, 'ul')).toBe(false);
  });

  test('util/element.next', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const p2 = document.querySelector('.parent.parent-2');
    expect(next(p1)).toBe(p2);
  });

  test('util/element.nextAll', () => {
    const i2 = document.querySelector('.item.item-2');

    const others = nextAll(i2);
    expect(others).toHaveLength(3);
    expect(others[0]).toHaveClass('item-3');
  });

  test('util/element.prev', () => {
    const p1 = document.querySelector('.parent.parent-1');
    const p2 = document.querySelector('.parent.parent-2');
    expect(prev(p2)).toBe(p1);
  });

  test('util/element.preAll', () => {
    const i3 = document.querySelector('.item.item-3');

    const others = prevAll(i3);
    expect(others).toHaveLength(2);
    expect(others[0]).toHaveClass('item-2');
  });

  test('util/element.siblings', () => {
    const i3 = document.querySelector('.item.item-3');

    const sibs = siblings(i3);
    expect(sibs).toHaveLength(4);
    expect(sibs[0]).toHaveClass('item-1');
  });

  test('util/element.findWithRetry', async () => {
    const root = document.getElementById('root');
    const newboi = document.createElement('div');
    newboi.id = 'newboi';
    newboi.textContent = 'newboi';

    function addElement() {
      setTimeout(() => {
        root.appendChild(newboi);
      }, 500);
    }

    const finder = findWithRetry({ target: '#newboi', retries: 20 });
    addElement();

    const found = await finder;
    expect(found).toBeTruthy();
  });

  test('util/element.addTabindexToContent', () => {
    const btn = document.querySelector('.content button');
    expect(btn).not.toHaveAttribute('tabindex');
    addTabindexToContent();
    expect(btn).toHaveAttribute('tabindex', '0');
  });

  test('util/element.addListeners', () => {
    document.body.innerHTML = '';
    const onclick = jest.fn();
    // eslint-disable-next-line react/prop-types
    function Btn({ listeners }) {
      const ref = useRef();
      useEffect(() => {
        addListeners(ref.current, listeners);
      });
      return (
        <button type="button" ref={ref}>
          click me
        </button>
      );
    }
    render(<Btn listeners={{ click: onclick }} />);
    let btn = screen.getByText(/click me/i);
    fireEvent.click(btn);
    expect(onclick).toHaveBeenCalledTimes(1);

    // Test with listener options
    const onfocus = jest.fn();
    document.body.innerHTML = '';
    render(
      <Btn listeners={{ focus: { cb: onfocus, opts: { once: true } } }} />
    );
    btn = screen.getByText(/click me/i);
    fireEvent.focus(btn);
    fireEvent.focus(btn);
    fireEvent.focus(btn);
    expect(onfocus).toHaveBeenCalledTimes(1);
  });

  test('util/element.removeListeners', () => {
    document.body.innerHTML = '';
    const onclick = jest.fn();
    // eslint-disable-next-line react/prop-types
    function Btn({ listeners }) {
      const ref = useRef();
      useEffect(() => {
        addListeners(ref.current, listeners);
      });
      return (
        <button type="button" ref={ref}>
          click me
        </button>
      );
    }

    const listeners = { click: onclick };
    render(<Btn listeners={listeners} />);
    const btn = screen.getByText(/click me/i);
    fireEvent.click(btn);
    expect(onclick).toHaveBeenCalledTimes(1);
    removeListeners(btn, listeners);
    expect(onclick).toHaveBeenCalledTimes(1);
  });

  test('util/element.trigger', () => {
    const handler = jest.fn();
    const btn = document.getElementById('btn');
    btn.addEventListener('my-custom-event', handler);
    trigger({ target: '#btn', type: 'my-custom-event' });

    expect(handler).toHaveBeenCalledTimes(1);
  });
});
