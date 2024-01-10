export default class BaseReporter {
  onRunComplete(_, results) {
    results.testResults.forEach((test) => {
      test.testResults.forEach((result, i) => {
        if (result.status === 'failed') {
          console.log(`${i === 0 ? '\n' : ''}❌ ${result.fullName}`);
        }
      });
    });
  }
}
