import getMenuIconFromPostElement from 'content/facebook/utils/menu/pre2020/getMenuIconFromPostElement';

const eQuerySelector = jest.fn();
const pQuerySelector = jest.fn();

const element = { querySelector: eQuerySelector };
const popover = { querySelector: pQuerySelector };

const pLink = 'some popover link';

let result;

const cleanup = () => {
  eQuerySelector.mockReset();
  pQuerySelector.mockReset();
};

describe('if there is a popover', () => {
  beforeAll(() => {
    eQuerySelector.mockReturnValue(popover);
    pQuerySelector.mockReturnValue(pLink);
    result = getMenuIconFromPostElement(element);
  });

  afterAll(cleanup);

  it('called element.querySelector with the popover selector', () => {
    expect(eQuerySelector).toHaveBeenCalledWith(':scope .uiPopover');
  });

  it('called popover.querySelector with the link selector', () => {
    expect(pQuerySelector).toHaveBeenCalledWith(':scope a');
  });

  it('returned the popover link', () => {
    expect(result).toEqual(pLink);
  });
});

describe('if there is not a popover', () => {
  beforeAll(() => {
    eQuerySelector.mockReturnValue();
    result = getMenuIconFromPostElement(element);
  });

  afterAll(cleanup);

  it('called element.querySelector with the popover selector', () => {
    expect(eQuerySelector).toHaveBeenCalledWith(':scope .uiPopover');
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});
