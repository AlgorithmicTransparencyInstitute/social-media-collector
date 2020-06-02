import attemptToGetMenuItemFromMenuOverlay from 'content/facebook/utils/menu/attemptToGetMenuItemFromMenuOverlay';

const querySelector = jest.fn();
const element = { querySelector };

let result;

const cleanup = () => {
  querySelector.mockReset();
};

describe('if there is a list', () => {
  const menuItem = 'some menu item';

  beforeAll(() => {
    querySelector.mockReturnValueOnce({ querySelector }).mockReturnValueOnce(menuItem);
    result = attemptToGetMenuItemFromMenuOverlay(element);
  });

  afterAll(cleanup);

  it('called querySelector twice', () => {
    expect(querySelector).toHaveBeenCalledTimes(2);
  });

  it('called element.querySelector with the menu selector', () => {
    expect(querySelector).toHaveBeenCalledWith(":scope ul[role='menu']");
  });

  it('called ul.querySelector with the data-feed selector', () => {
    expect(querySelector).toHaveBeenCalledWith(
      ":scope li[data-feed-option-name='FeedAdSeenReasonOption']"
    );
  });

  it('returned the menu item', () => {
    expect(result).toEqual(menuItem);
  });
});

describe('if there is not a list', () => {
  beforeAll(() => {
    querySelector.mockReturnValue();
    result = attemptToGetMenuItemFromMenuOverlay(element);
  });

  afterAll(cleanup);

  it('called querySelector once', () => {
    expect(querySelector).toHaveBeenCalledTimes(1);
  });

  it('called querySelector with the menu selector', () => {
    expect(querySelector).toHaveBeenCalledWith(":scope ul[role='menu']");
  });

  it('returned null', () => {
    expect(result).toBeNull();
  });
});
