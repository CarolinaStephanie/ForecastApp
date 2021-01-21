describe('Forecast App sample test', () => {
  it('should search London city', async () => {
    await device.reloadReactNative();
    await element(by.id('city-input')).typeText('Londres\n');
    await element(by.id('search-button')).tap();

    await expect(element(by.text('LONDON CITY DETAILS'))).toBeVisible();
    await expect(element(by.id('CITY NOT FOUND'))).toNotExist();
  });

  it('should search random city', async () => {
    await element(by.id('go-back')).tap();
    await element(by.id('city-input')).clearText();
    await element(by.id('city-input')).typeText('NotACity\n');
    await element(by.id('search-button')).tap();

    await expect(element(by.text('CITY NOT FOUND'))).toBeVisible();
    await expect(element(by.id('LONDON CITY DETAILS'))).toNotExist();
  });

  it('should add London to favorite List and see details', async () => {
    await element(by.id('go-back')).tap();
    await element(by.id('add-favorite-1')).tap();
    await element(by.id('favorite-city-0')).tap();

    await expect(element(by.text('LONDON CITY DETAILS'))).toBeVisible();
  });

  it('should remove random city from history', async () => {
    await element(by.id('go-back')).tap();
    await element(by.id('history-list-remove-0')).tap();

    await expect(element(by.id('NotACity'))).toNotExist();
  });
});
