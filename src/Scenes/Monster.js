class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightArm = this.add.sprite(this.bodyX+70, this.bodyY+70, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX-70, this.bodyY+70, "monsterParts", "arm_greenA.png");
        my.sprite.leftArm.flipX=true;
        my.sprite.rightLeg = this.add.sprite(this.bodyX+30, this.bodyY+150, "monsterParts", "leg_redA.png");
        my.sprite.rightLeg.scale=0.75; 
        my.sprite.leftLeg = this.add.sprite(this.bodyX-30, this.bodyY+150, "monsterParts", "leg_redA.png");
        my.sprite.leftLeg.flipX=true;
        my.sprite.leftLeg.scale=0.75; 
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowF.png");
        my.sprite.leftEye = this.add.sprite(this.bodyX-30, this.bodyY-30, "monsterParts", "detail_white_ear_round.png");
        my.sprite.rightEye = this.add.sprite(this.bodyX+30, this.bodyY-30, "monsterParts", "eye_dead.png");
        my.sprite.mouthSmile = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthI.png");
        my.sprite.mouthFang = this.add.sprite(this.bodyX, this.bodyY+20, "monsterParts", "mouthJ.png");
        my.sprite.mouthFang.visible=false;
        my.sprite.rightAntennae = this.add.sprite(this.bodyX+50, this.bodyY-100, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAntennae = this.add.sprite(this.bodyX-50, this.bodyY-100, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAntennae.flipX=true;

        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (Phaser.Input.Keyboard.JustDown(this.sKey)){
            my.sprite.mouthSmile.visible = true
            my.sprite.mouthFang.visible = false;
        }

        if (Phaser.Input.Keyboard.JustDown(this.fKey)){
            my.sprite.mouthSmile.visible = false
            my.sprite.mouthFang.visible = true;
        }

        for (let bodyPart in my.sprite) {
            if (this.aKey.isDown) {
                my.sprite[bodyPart].x -=5;
            }
            if (this.dKey.isDown) {
                my.sprite[bodyPart].x +=5;
            }
        }

    }

}