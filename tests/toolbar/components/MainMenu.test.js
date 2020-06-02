import React from 'react';
import renderer from 'react-test-renderer';
import MainMenu from 'toolbar/components/MainMenu';
import useArchive from 'common/hooks/useArchive';

jest.mock('common/hooks/useArchive');

let tree;

const cleanup = () => {
  useArchive.mockReset();
  tree = undefined;
};

const doTest = ([label, archiveIndex, loading]) => {
  describe(`when the archive is ${label}`, () => {
    beforeAll(() => {
      useArchive.mockReturnValue({ index: archiveIndex, loading });
      tree = renderer.create(<MainMenu />);
    });

    afterAll(cleanup);

    it('rendered correctly', () => {
      expect(tree).toMatchSnapshot();
    });
  });
};

[
  ['undefined', undefined, true],
  ['empty', [], false],
  ['has stuff in it', ['one', 'two'], false]
].forEach(doTest);
