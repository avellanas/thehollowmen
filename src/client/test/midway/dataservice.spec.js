describe('Midway: dataservice requests', function () {
    var dataservice;
    var tester;

    beforeEach(function () {
        if (tester) {
            tester.destroy();
        }
        tester = ngMidwayTester('app');
    });

    beforeEach(function () {
        dataservice = tester.inject('dataservice');
        expect(dataservice).not.to.equal(null);
    });

});