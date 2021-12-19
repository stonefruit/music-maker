import * as Tone from 'tone';

document.querySelector('body')?.addEventListener('click', async () => {
  if (Tone.context.state !== 'running') {
    await Tone.context.resume();
  }
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  const now = Tone.now();
  synth.triggerAttack('D4', now);
  synth.triggerAttack('F4', now + 0.5);
  synth.triggerAttack('A4', now + 1);
  synth.triggerAttack('C4', now + 1.5);
  synth.triggerAttack('E4', now + 2);
  synth.triggerRelease(['D4', 'F4', 'A4', 'C4', 'E4'], now + 4);
});
