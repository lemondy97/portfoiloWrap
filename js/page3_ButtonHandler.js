	  const opt = {
              scrollGauge: 0,
              wrapClass: document.querySelector('div#page3Wrap'),
              section: document.getElementsByClassName('portfolioImage'),
              sectionHeight() {
                  return this.section[0].clientHeight
              },
              maxValue() {
                  return (this.section.length - 1) * this.sectionHeight()
              },
              currentSection() {
                  return parseInt(opt.scrollGauge / opt.sectionHeight())
              },
              limitValidate() {
                  if (this.scrollGauge < 0) this.scrollGauge = 0;
                  else if (this.scrollGauge > this.maxValue()) this.scrollGauge = this.maxValue();
              },
              applyHeightValue(elem, idx, value) {
                  elem.style.bottom = -(this.sectionHeight() * idx) + value + 'px'
              },
              initialTopValue(value) {
                  [...this.section].forEach((elem, idx) => this.applyHeightValue(elem, idx, value))
              },
              scrollValue(value) {
                  return this.sectionHeight() * value
              },
              controlSections(value) {
                  this.initialTopValue(this.scrollValue(value));
              },
              changeSection(val) {
                  return (opt.currentSection() - val) * opt.sectionHeight();
              },
              moveSectionWithinLimit() {
                  this.limitValidate();
                  this.controlSections(this.currentSection());
              }
          }
          let btnHandler;
          btnHandler = function (e) {
              const target = e.target;
              if (!target.classList.contains('UpDown')) return;
              switch (target.textContent.toLowerCase()) {
                  case 'up':
                      opt.scrollGauge = opt.changeSection(1);
                      break;
                  case 'down':
                      opt.scrollGauge = opt.changeSection(-1);
                      break;
              }
              opt.moveSectionWithinLimit();
          }
          opt.initialTopValue(opt.currentSection());
          window.addEventListener('click', btnHandler);