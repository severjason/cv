import { getCookie, setCookie } from 'cookies-next';
import type { PaletteMode } from '@mui/material';

const KEYS = {
  mode: 'cv-mode',
};

export const savePaletteMode = (mode?: PaletteMode) => {
  if (mode) {
    setCookie(KEYS.mode, mode, { maxAge: 365 * 2 });
  }
};

export const getPaletteMode = () => getCookie(KEYS.mode) as PaletteMode;
