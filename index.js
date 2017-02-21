var projects = document.getElementsByClassName('projects')[0];
var projectEls = projects.getElementsByClassName('project-el');

// On attache un event mouseenter a tout les elements .project-el
for (var i = 0; i < projectEls.length; i++) {
  projectEls[i].addEventListener('mouseenter', onProjectMouseEnter, false)
  projectEls[i].addEventListener('mouseleave', onProjectMouseLeave, false)
}

var timeline = new TimelineMax({ paused: true })
var projectElSize = projectEls[0].getBoundingClientRect()

var translationValue = {
  left: {x: '-100%', y: '0%'},
  right: {x: '100%', y: '0%'},
  top: {x: '0%', y: '-100%'},
  bottom: {x: '0%', y: '100%'}
}

// Fonctionqui gere lentre du curseur dans le project
// On recupere les donnes de levenement en parametre: event
// v1
function onProjectMouseEnter(event) {
  // Current target = element qui subit levent
  var currentTarget = event.currentTarget
  var projectInfo = currentTarget.getElementsByClassName('project-info')[0]

  var offsetX = ((event.offsetX - projectElSize.width / 2) / projectElSize.width ) * 2;
  var offsetY = ((event.offsetY - projectElSize.height / 2) / projectElSize.height ) * 2;

  var direction;
  if( Math.abs( offsetX ) > Math.abs( offsetY ) ) {
    direction = ( offsetX < 0 ) ? 'left' : 'right'
  } else {
    direction = ( offsetY < 0 ) ? 'top' : 'bottom'
  }

  currentTarget.setAttribute('data-direction', direction)

  projectInfo.classList.add('project-info--show')

  TweenMax.fromTo( projectInfo, 1, {
    x: translationValue[direction].x,
    y: translationValue[direction].y
  }, {
    x: '0%',
    y: '0%',
    ease: Expo.easeOut
  })
}

function onProjectMouseLeave(event) {

  var currentTarget = event.currentTarget
  var projectInfo = currentTarget.getElementsByClassName('project-info')[0]

  var direction = currentTarget.getAttribute('data-direction', direction)


  TweenMax.to( projectInfo, 1, {
    x: translationValue[direction].x,
    y: translationValue[direction].y,
    onComplete: function() {
      projectInfo.classList.remove('project-info--show')
    },
    ease: Expo.easeOut
  })

}
