sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    icecream.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    mySprite.startEffect(effects.confetti, 500)
    music.jumpUp.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    icecream.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
    music.jumpDown.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    music.jumpDown.play()
})
let icecream: Sprite = null
let mySprite: Sprite = null
info.setScore(4)
scene.setBackgroundColor(1)
mySprite = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
icecream = sprites.create(img`
. . . . . 3 3 b 3 3 d d 3 3 . . 
. . . . 3 1 1 d 3 d 1 1 1 1 3 . 
. . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
. . 3 d d 1 1 1 d d 1 1 1 3 3 3 
. 3 1 1 d 1 1 1 1 d d 1 1 b . . 
. 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
. b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
. 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
. 4 4 d 1 1 1 1 1 1 d d d b b . 
. 4 d b d 1 1 1 1 1 1 1 1 3 . . 
4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
4 5 5 d 5 5 d b b b d d 3 . . . 
4 5 5 5 d d d d 4 4 b 3 . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
`, SpriteKind.Food)
let car = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 6 6 . . . . 
. . . . . 6 6 9 9 6 6 6 6 . . . 
. . . . . c 9 6 6 6 6 6 c . . . 
. . . . 6 c 9 6 6 6 6 6 c 6 . . 
. . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
. . . f 6 c 9 6 6 6 6 6 c 6 f . 
. . . f 8 c 6 6 6 6 6 6 c 8 f . 
. . . f 6 c 6 b b b b 6 c 6 f . 
. . . 8 6 6 b c c c c b 6 6 8 . 
. . . 8 8 b c c c c c c b 8 8 . 
. . . f 8 9 9 9 9 9 9 9 9 8 f . 
. . . f 8 d 6 6 6 6 6 6 d 8 f . 
. . . . 6 d d 6 6 6 6 d d 6 f . 
. . . . f 6 d 6 6 6 6 d 6 f . . 
. . . . . 8 6 6 6 6 6 6 8 . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
car.setFlag(SpriteFlag.BounceOnWall, true)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
icecream.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    if (info.score() == 30) {
        music.powerUp.play()
        game.over(true, effects.confetti)
    }
    if (info.score() == 0) {
        music.powerDown.play()
        game.over(false, effects.dissolve)
    }
})
