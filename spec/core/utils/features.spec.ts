import {
    getFeatureSettings,
    isFeatureEnabled
} from '../../../src/core/utils/features';

describe('core/utils/features', () => {
    describe('getFeatureSettings', () => {
        it('Feature canary', () => {
            const features = getFeatureSettings();
            expect(features).toHaveProperty('unitTestCanary');
            expect(features.unitTestCanary).toEqual(false);
        });
    });
    describe('isFeatureEnabled', () => {
        it('Unknown Key', () => {
            const feature = 'Invalid Feature';
            expect(isFeatureEnabled(feature)).toEqual(false);
        });
        it('Null feature', () => {
            const feature = null;
            expect(isFeatureEnabled(feature)).toEqual(false);
        });
        it('Undefined feature', () => {
            const feature = undefined;
            expect(isFeatureEnabled(feature)).toEqual(false);
        });
        it('Empty', () => {
            const feature = '';
            expect(isFeatureEnabled(feature)).toEqual(false);
        });
        it('Valid Key, Should Always be False', () => {
            const feature = 'unitTestCanary';
            expect(isFeatureEnabled(feature)).toEqual(false);
        });
        it('Valid Key, Should be True (as of 0.1)', () => {
            const feature = 'tooltipHandler';
            expect(isFeatureEnabled(feature)).toEqual(true);
        });
        it('Valid Key, Should be True (as of 0.1), with whitespace', () => {
            const feature = ' tooltipHandler ';
            expect(isFeatureEnabled(feature)).toEqual(true);
        });
    });
});
