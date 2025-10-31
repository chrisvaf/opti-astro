import type { DisplaySettingsFragment } from '../../../../__generated/sdk.ts';
import { getDictionaryFromDisplaySettings } from '../../../graphql/shared/displaySettingsHelpers.ts';

export interface TestimonialStyleConfig {
    containerClasses: string;
    quoteClasses: string;
    authorClasses: string;
}

// Base styling that matches the provided HTML
const baseContainerStyles = 'bg-[#f9f9f9] border-l-4 border-[#007bff] p-5 my-5 italic text-[#333] rounded';

export function getTestimonialStyleConfig(
    displaySettings: DisplaySettingsFragment[],
    displayTemplateKey?: string
): TestimonialStyleConfig {
    const settingsDict = getDictionaryFromDisplaySettings(displaySettings);

    return {
        containerClasses: baseContainerStyles,
        quoteClasses: 'mb-2.5',
        authorClasses: 'text-right font-bold'
    };
}
