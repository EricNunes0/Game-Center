import audio from '../../Functions/audios';

const cardTransitionSecs = 0.5; /* Duração da transição das cartas em segundos */

export default function HomeCard(id) {
    console.log(`HomeCard(${id})`);
    let card = document.getElementById(`card-${id}`);
    let header = document.getElementById(`header-${id}`);
    if(card.className.includes(`backwards`)) {
        card.disabled = true;
        audio(`../../Audios/snd_card.mp3`, 0.8);
        card.className = card.className.replace("backwards", "turning-forwards");
        header.className = header.className.replace("closed", "opening");
        setTimeout(function() {
            card.className = card.className.replace("turning-forwards", "forwards");
            header.className = header.className.replace("opening", "opened");
            card.disabled = false;
        }, cardTransitionSecs * 1000);
    } else {
        card.disabled = true;
        audio(`../../Audios/snd_card.mp3`, 0.8);
        card.className = card.className.replace("forwards", "turning-backwards");
        header.className = header.className.replace("opened", "closing");
        setTimeout(function() {
            card.className = card.className.replace("turning-backwards", "backwards");
            header.className = header.className.replace("closing", "closed");
            card.disabled = false;
        }, cardTransitionSecs * 1000);
    }
}