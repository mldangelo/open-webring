const prod = process.env.NODE_ENV === 'production';

module.exports = {
  'process.env.GA_TRACKING_ID': prod ? 'G-3C644WJZEC' : ''
};
