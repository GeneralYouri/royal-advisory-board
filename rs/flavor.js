Flavor = new flavor();

Flavor.intro = [
  {
    rule: 'const',
    payload: 'Your scribe is perusing a book titled '
  },
  {
    rule: 'rand',
    payloads: [
      'Clicking Techniques: Secret, Ancient, and Automated',
      'Scrying Orb User\'s Manual',
      'Transmuting Beer into Gold',
      'A Lusty Argonian Maid',
      'Extracting Stats for Dummies',
      'Large Quantities of Gold Coins and General Relativity',
      'How to Embezzle on an Archaeological Expedition'
    ]
  },
  {
    rule: 'const',
    payload: '. Putting down the book, he reaches out to you and says, "Your Majesty, if I can see the kingdom\'s annals, I will create a summary for you."'
  }
];

Flavor.pageLoaded = function() {
  View.setIntro(this.renderString(this.intro));
  //View.setStatus('The mage is waiting...');
}
