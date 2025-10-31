import type { DisplaySettingsFragment } from '../../../../__generated/sdk.ts';
import { getDictionaryFromDisplaySettings } from '../../../graphql/shared/displaySettingsHelpers.ts';

export interface ProfileStyleConfig {
    containerClasses: string;
    headerContainerClasses: string;
    profileImageClasses: string;
    nameHeadingClasses: string;
    titleHeadingClasses: string;
    sectionTitleClasses: string;
    bioContainerClasses: string;
    bioTextClasses: string;
    achievementsContainerClasses: string;
    achievementsListClasses: string;
    achievementsItemClasses: string;
    testimonialsContainerClasses: string;
    testimonialCardClasses: string;
    testimonialQuoteClasses: string;
    testimonialAuthorClasses: string;
}

export function getProfileStyleConfig(
    displaySettings: DisplaySettingsFragment[],
    displayTemplateKey?: string
): ProfileStyleConfig {
    const settingsDict = getDictionaryFromDisplaySettings(displaySettings);

    return {
        // Main container
        containerClasses: 'font-sans max-w-4xl mx-auto my-10 p-7 bg-white rounded-lg shadow-lg',

        // Header section
        headerContainerClasses: 'flex items-center mb-7 border-b border-gray-200 pb-5',
        profileImageClasses: 'w-36 h-36 rounded-full object-cover mr-7 border-4 border-[#007bff]',
        nameHeadingClasses: 'm-0 text-gray-800 text-4xl',
        titleHeadingClasses: 'mt-1 mb-0 text-gray-600 text-2xl font-normal',

        // Section titles
        sectionTitleClasses: 'text-[#007bff] border-b-2 border-[#007bff] pb-2.5 mb-4',

        // Bio section
        bioContainerClasses: 'mb-7',
        bioTextClasses: 'leading-7 text-gray-700',

        // Achievements section
        achievementsContainerClasses: 'mb-7',
        achievementsListClasses: 'list-disc pl-5 text-gray-700',
        achievementsItemClasses: 'mb-2',

        // Testimonials section
        testimonialsContainerClasses: '',
        testimonialCardClasses: 'bg-[#f9f9f9] border-l-4 border-[#007bff] p-5 my-5 italic text-gray-800 rounded',
        testimonialQuoteClasses: 'mb-2.5',
        testimonialAuthorClasses: 'text-right font-bold'
    };
}
