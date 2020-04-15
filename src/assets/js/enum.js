import DavidImage from '../images/avatar.png';

const ENUMS = Object.freeze({
  ROUTES: {
    HOME: '/'
  },
  CONTENT: {
    HEADER: 'Your FrontEnd Developer on Demand',
    SUBHEADER: 'Responsive and pixel perfect React development for €200 👋',
    KEY: ['Delivery in 4 business days', 'No contract', 'Quick onboarding'],
  },
  DRAG_TEXT: 'Drag and drop your design file here',
  EXTENSION_TEXT: '.Psd, .Xd, .Sketch, .Fig',
  TERM_TEXT: 'By clicking the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.',
  BUTTON: 'Get Started',
  ABOUT: {
    IMAGE: DavidImage,
    NAME: 'David Lead Designer',
    TITLE: 'Your Front End Team on Demand',
    CONTENT: '<p class="no-margin-bottom">Long story short. When David met Jonathan in an anti-cafe at Station F (coworking café), they ended up sympathizing. Shortly after they decide to create a Front team and are joined by Fred and Maxime. 2 years later, there are still all four of us and we also work with other freelancers. We decided to create <strong>ReactonDemand</strong> to continue working together on the technology we like the most: React.</p> <p class="no-margin-top">The story continues every day and we will be happy to give life to your design (Xd / Sketch or Figma).</p> <p><strong>ReactonDemand.co</strong> is based in Paris France — if you want to send us postcards :) Still, the team is remote. We cover different timezones, mindsets and we value geographical freedom.</p>'
  },
  PRICE: {
    IMAGE: DavidImage,
    NAME: 'David Lead Designer',
    TITLE: 'One plan, no bullshit.<br />€ 200 / page',
    CONTENT: `<p>Delivery = 4 business days</p><ul class="checkbox-container"><li class="checkbox"><svg class="MuiSvgIcon-root makeStyles-checkBox-167" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>Responsive</li><li class="checkbox"><svg class="MuiSvgIcon-root makeStyles-checkBox-167" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg> Pixel perfect</li></ul><p class="margin-double">Maximum length = 8332 px</p>`
  },
  ERROR: {
    // IMAGE: DavidImage,
    // NAME: 'David Lead Designer',
    // TITLE: 'One plan, no bullshit.<br />€ 200 / page',
    CONTENT: 'Sorry but we do not accept these kind of documents for the moment. If you think it’s an error please email it to <a href="mailto:support@reactondemand.co">support@reactondemand.co</a>'
  }
});

export default ENUMS;