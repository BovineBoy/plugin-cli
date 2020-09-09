'use strict';

test('should be 8.9.0 base undef pkg', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({})
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('8.9.0');
});

test('should be 8.9.0 base undef engines ', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({ packageJson: {} })
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('8.9.0');
});

test('should be 8.9.0 base undef node ', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({ packageJson: { engines: {} } })
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('8.9.0');
});

test('should be 8.9.0 base engines only have npm property', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({ packageJson: { engines: { npm: '^5.0.0' } } })
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('8.9.0');
});

test('should be 8.9.0 base blank string', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({ packageJson: { engines: { node: '' } } })
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('8.9.0');
});

test('should be 12.16.2', () => {
    jest.doMock('read-pkg-up', () => ({
        sync: () => ({ packageJson: { engines: { node: '>=12.16.2' } } })
    }));

    const nodeVersion = require('./node-version');

    expect(nodeVersion).toEqual('12.16.2');
});
