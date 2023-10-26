import mongoose, { Document, Model } from 'mongoose';

export interface CustomShoeTemporaryInterface extends Document {
    userId?: mongoose.Types.ObjectId;
    selectedColors: {
        selectedColorSwosh_1: { rgb: { r: number; g: number; b: number } };
        selectedColorTip_1: { rgb: { r: number; g: number; b: number } };
        selectedColorHill_1: { rgb: { r: number; g: number; b: number } };
        selectedColorQuarter_1: { rgb: { r: number; g: number; b: number } };
        selectedColorHeel_logo_1: { rgb: { r: number; g: number; b: number } };
        selectedColorToe_1: { rgb: { r: number; g: number; b: number } };
        selectedColorEyestay_1: { rgb: { r: number; g: number; b: number } };
        selectedColorQuarter_2: { rgb: { r: number; g: number; b: number } };
        selectedColorSwosh_2: { rgb: { r: number; g: number; b: number } };
        selectedColorHeel_2: { rgb: { r: number; g: number; b: number } };
        selectedColorEyestay_2: { rgb: { r: number; g: number; b: number } };
    };
    selectedColorsText: {
      selectedColorLeftText: { rgb: { r: number; g: number; b: number } };
      selectedColorRightText: { rgb: { r: number; g: number; b: number } };
    };
    selectedPatches: {
      selectedLeftPatch: string;
      selectedRightPatch: string;
    };
    swooshVisibility: {
      isLeftSwooshVisible: boolean;
      isRightSwooshVisible: boolean;
    };
    sideText: {
      leftText: string;
      rightText: string;
    };
    expireDate?: Date
  }

const customShoeTemporarySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    selectedColors: Object,
    selectedColorsText: Object,
    selectedPatches: Object,
    swooshVisibility: Object,
    sideText: Object,
    expireDate: { type: Date },
  });

const CustomShoeTemporary: Model<CustomShoeTemporaryInterface> = mongoose.model<CustomShoeTemporaryInterface>(
  'CustomShoeTemporary',
  customShoeTemporarySchema
);

export default CustomShoeTemporary;