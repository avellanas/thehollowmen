/* jshint -W117, -W030 */
describe('dataservice', function () {
    'use strict';

    var scope;
    var mocks = {};

    beforeEach(function () {
        module('app', function ($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function ($httpBackend, $rootScope, dataservice) {
        });
    });

    it('should be registered', function () {
        expect(dataservice).not.to.equal(null);
    });

    describe('ready function', function () {
        it('should exist', function () {
            expect(dataservice.ready).not.to.equal(null);
        });

        it('should return a resolved promise', function (done) {
            dataservice.ready()
                .then(function (data) {
                    expect(true).to.be.true;
                    done();
                }, function (data) {
                    expect('promise rejected').to.be.true;
                    done();
                });
            $rootScope.$apply();
        });
    });

    specHelper.verifyNoOutstandingHttpRequests();
});