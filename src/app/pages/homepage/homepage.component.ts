import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngoc-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  /*   slideshowOne = 'home-simon.png';
  slideshowTwo = 'sim-contact-tel.png'; */

  slidesSimon = [
    {
      id: 0,
      img: 'simon-homepage.png',
      title: `Homepage`,
    },
    {
      id: 1,
      img: 'simon-contact.png',
      title: `Page contact`,
    },
    {
      id: 2,
      img: 'simon-montage.png',
      title: `Page montage`,
    },
  ];

  slidesBanana = [
    {
      id: 0,
      img: 'screen-welcome-banana.jpg',
      title: `Page de bienvenue`,
    },
    {
      id: 1,
      img: 'screen-question-banana.jpg',
      title: `Page "Questions"`,
    },
    {
      id: 2,
      img: 'screen-rep-banana.jpg',
      title: `Page "Réponses"`,
    },
  ];

  slidesWhoAreYou = [
    {
      id: 0,
      img: 'who-homepage.png',
      title: `Page de bienvenue`,
    },
    {
      id: 1,
      img: 'who-dragon-ball.png',
      title: `Quiz Dragon Ball`,
    },
    {
      id: 2,
      img: 'who-kimetsu.png',
      title: `Quiz Kimetsu no yaiba`,
    },
    {
      id: 3,
      img: 'who-one-piece.png',
      title: `Quiz One Piece`,
    },
  ];

  slidesDragon = [
    {
      id: 0,
      img: 'dragon-quiz-1.jpg',
      title: `Page de bienvenue`,
    },
    {
      id: 1,
      img: 'dragon-quiz-2.jpg',
      title: `Exemple de question`,
    },
    {
      id: 2,
      img: 'dragon-quiz-3.jpg',
      title: `Exemple de résultat`,
    },
  ];

  slideIndexSimon = 0;
  slideIndexBanana = 0;
  slideIndexWhoAreYou = 0;
  slideIndexDragon = 0;

  constructor(private router: Router) {
    setInterval(() => {
      this.goToNextSlideSimon();
    }, 5000);

    setInterval(() => {
      this.goToNextSlideBanana();
    }, 7000);

    setInterval(() => {
      this.goToNextSlideDragon();
    }, 7000);
  }

  ngOnInit() {}

  goToPreviousSlideSimon() {
    if (this.slideIndexSimon > 0) {
      this.slideIndexSimon -= 1;
    } else {
      this.slideIndexSimon = this.slidesSimon.length - 1;
    }
  }

  goToNextSlideSimon() {
    if (this.slideIndexSimon < this.slidesSimon.length - 1) {
      this.slideIndexSimon += 1;
    } else if (this.slideIndexSimon === this.slidesSimon.length - 1) {
      this.slideIndexSimon = 0;
    }
  }

  goToPreviousSlideBanana() {
    if (this.slideIndexBanana > 0) {
      this.slideIndexBanana -= 1;
    } else {
      this.slideIndexBanana = this.slidesBanana.length - 1;
    }
  }

  goToNextSlideBanana() {
    if (this.slideIndexBanana < this.slidesBanana.length - 1) {
      this.slideIndexBanana += 1;
    } else if (this.slideIndexBanana === this.slidesBanana.length - 1) {
      this.slideIndexBanana = 0;
    }
  }

  goToPreviousSlideWhoAreYou() {
    if (this.slideIndexWhoAreYou > 0) {
      this.slideIndexWhoAreYou -= 1;
    } else {
      this.slideIndexWhoAreYou = this.slidesWhoAreYou.length - 1;
    }
  }

  goToNextSlideWhoAreYou() {
    if (this.slideIndexWhoAreYou < this.slidesWhoAreYou.length - 1) {
      this.slideIndexWhoAreYou += 1;
    } else if (this.slideIndexWhoAreYou === this.slidesWhoAreYou.length - 1) {
      this.slideIndexWhoAreYou = 0;
    }
  }

  goToPreviousSlideDragon() {
    if (this.slideIndexDragon > 0) {
      this.slideIndexDragon -= 1;
    } else {
      this.slideIndexDragon = this.slidesDragon.length - 1;
    }
  }

  goToNextSlideDragon() {
    if (this.slideIndexDragon < this.slidesDragon.length - 1) {
      this.slideIndexDragon += 1;
    } else if (this.slideIndexDragon === this.slidesDragon.length - 1) {
      this.slideIndexDragon = 0;
    }
  }

  goToWhoAreYouWebsite() {
    window.location.href = 'https://whoareyou.eu';
  }
  goToSimonWebsite() {
    window.location.href = 'https://www.simonvaissiere.com';
  }
  goToBananaWebsite() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.decisions.banana';
  }

  goToDragonWebsite() {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.dragonquiz&hl=fr';
  }
}
