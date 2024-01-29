document.addEventListener("DOMContentLoaded", function() {
    const entercodeInput = document.querySelector('.entercode');

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'ahmed') {
                playAhmed();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'mithra') {
                playMithra();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'pranaya') {
                playPranaya();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'sujay') {
                playSujay();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'kyle') {
                playKyle();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'joshua') {
                playJoshua();
            }
        }
    });
    
    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'anish') {
                playAnish();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'nikhil') {
                playNikhil();
            }
        }
    });

    entercodeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const inputValue = entercodeInput.value.trim().toLowerCase();
            if (inputValue === 'kathy') {
                playKathy();
            }
        }
    });

    function playAhmed() {
        const audio = new Audio("Lovin On Me.mp3");
        audio.play();
    }
    function playMithra() {
        const audio = new Audio("Minuet.mp3");
        audio.play();
    }
    function playPranaya() {
        const audio = new Audio("Yes or Yes.mp3");
        audio.play();
    }
    function playSujay() {
        const audio = new Audio("Death By Glamour.mp3");
        audio.play();
    }
    function playKyle() {
        const audio = new Audio("Drill.mp3");
        audio.play();
    }
    function playJoshua() {
        const audio = new Audio("Waterfall Etude.mp3");
        audio.play();       
    }
    function playAnish() {
        const audio = new Audio("Experience.mp3");
        audio.play();
    }
    function playNikhil() {
        const audio = new Audio("Rickroll.mp3");
        audio.play();
    }
    function playKathy() {
        const audio = new Audio("Harry Potter.mp3");
        audio.play();
    }
});
