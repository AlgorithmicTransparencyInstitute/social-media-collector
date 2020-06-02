import * as AD_DETAILS from 'content/youtube/utils/adDetails';

it('has keys', () => {
  expect(Object.keys(AD_DETAILS)).toHaveLength(6);
});

Object.keys(AD_DETAILS).forEach(deet => {
  it(`${deet} is a function`, () => {
    expect(typeof AD_DETAILS[deet]).toEqual('function');
  });
});
