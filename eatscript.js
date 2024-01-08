const text = document.querySelector(".text p");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
	)
	.join("");




    const $images = document.querySelectorAll('.revealing-image');

    $images.forEach(($image) => {
        $image.animate(
            {
                opacity: [0, 1],
                clipPath: ['inset(45% 10% 45% 20%)', 'inset(0% 0% 0% 0%)'],
            },
            {
                fill: 'both',
                timeline: new ViewTimeline({
                    subject: $image,
                }),
                rangeStart: 'entry 10%',
                rangeEnd: 'cover 10%',
            }
        );
    });
