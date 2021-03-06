const cv = global.dut;
const { readTestImage } = global.utils;
const recognizerTests = require('./recognizerTests');

describe('face', () => {
  if (!cv.xmodules.face) {
    it('compiled without face');
    return;
  }

  let testImg;

  before(() => {
    testImg = readTestImage().resizeToMax(250);
  });

  describe('EigenFaceRecognizer', () => {
    const args = ['num_components', 'threshold'];
    const values = [10, 0.8];
    recognizerTests(() => testImg, args, values, cv.EigenFaceRecognizer);
  });

  describe('FisherFaceRecognizer', () => {
    const args = ['num_components', 'threshold'];
    const values = [10, 0.8];
    recognizerTests(() => testImg, args, values, cv.FisherFaceRecognizer);
  });

  describe('LBPHFaceRecognizer', () => {
    const args = ['radius', 'neighbors', 'grid_x', 'grid_y'];
    const values = [2, 16, 16, 16];
    recognizerTests(() => testImg, args, values, cv.LBPHFaceRecognizer);
  });
});
