import attemptToGetMenuOverlayFromMenuIcon from 'content/facebook/utils/menu/pre2020/attemptToGetMenuOverlayFromMenuIcon';

const querySelector = jest.fn();
const getAttribute = jest.fn();

const doc = { querySelector };
const element = { getAttribute };

const id = 'abcd1234';
const menuOverlay = 'some menu overlay';

let result;

beforeAll(() => {
  getAttribute.mockReturnValue(id);
  querySelector.mockReturnValue(menuOverlay);
  result = attemptToGetMenuOverlayFromMenuIcon(element, doc);
});

it('called element.getAttribute with "id"', () => {
  expect(getAttribute).toHaveBeenCalledWith('id');
});

it('called document.querySelector with the correct selector', () => {
  expect(querySelector).toHaveBeenCalledWith(`.uiLayer[data-ownerid='${id}']`);
});

it('returned the correct menu overlay', () => {
  expect(result).toEqual(menuOverlay);
});
