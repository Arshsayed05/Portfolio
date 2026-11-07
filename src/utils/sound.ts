// Web Audio API Synthesized Sound System for Brutalist Interface Feedback
class SoundFX {
  private ctx: AudioContext | null = null;
  private enabled: boolean = false;

  constructor() {
    // Keep sound off by default to respect user browsing preferences
    const saved = typeof window !== 'undefined' ? localStorage.getItem('arsh_sound_enabled') : null;
    this.enabled = saved === 'true';
  }

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public toggle(): boolean {
    this.enabled = !this.enabled;
    if (typeof window !== 'undefined') {
      localStorage.setItem('arsh_sound_enabled', String(this.enabled));
    }
    if (this.enabled) {
      this.initCtx();
      this.click(660);
    }
    return this.enabled;
  }

  public click(freq: number = 880, duration: number = 0.02) {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public blip(freq: number = 440) {
    this.click(freq, 0.04);
  }

  public hover() {
    if (!this.enabled) return;
    try {
      this.initCtx();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.015);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.015);
    } catch {
      // AudioContext policy suppression fallback
    }
  }

  public success() {
    if (!this.enabled) return;
    this.click(523.25, 0.03);
    setTimeout(() => this.click(659.25, 0.03), 40);
    setTimeout(() => this.click(783.99, 0.06), 80);
  }
}

export const soundFx = new SoundFX();
