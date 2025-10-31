import type { DisplaySettingsFragment } from '../../../../__generated/sdk.ts';
import { getDictionaryFromDisplaySettings } from '../../../graphql/shared/displaySettingsHelpers.ts';

export interface ProfileStyleConfig {
    outerContainerClasses: string;
    gridContainerClasses: string;
    leftColumnClasses: string;
    rightColumnClasses: string;
    profileImageClasses: string;
    nameHeadingClasses: string;
    titleHeadingClasses: string;
    sectionTitleClasses: string;
    sectionDividerClasses: string;
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
        // Outer container (no background)
        outerContainerClasses: 'p-8 md:p-12',

        // Grid layout
        gridContainerClasses: 'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8',

        // Left column (image)
        leftColumnClasses: 'flex justify-center md:justify-start',

        // Right column (content)
        rightColumnClasses: 'bg-white rounded-lg p-8 md:p-12 shadow-sm',

        // Profile image
        profileImageClasses: 'w-64 h-64 md:w-72 md:h-72 rounded-xl object-cover shadow-md',

        // Name and title
        nameHeadingClasses: 'text-[#2c3e5f] text-4xl md:text-5xl font-bold mb-2',
        titleHeadingClasses: 'text-[#5a6c8c] text-2xl md:text-3xl font-normal mb-0',

        // Section titles
        sectionTitleClasses: 'text-[#2c3e5f] text-2xl md:text-3xl font-bold mb-4',
        sectionDividerClasses: 'border-t border-[#c8d0e0] my-8',

        // Bio section
        bioContainerClasses: '',
        bioTextClasses: 'text-[#4a5568] leading-relaxed text-base md:text-lg',

        // Achievements section
        achievementsContainerClasses: '',
        achievementsListClasses: 'list-disc pl-6 text-[#2c3e5f] space-y-2',
        achievementsItemClasses: 'text-base md:text-lg',

        // Testimonials section
        testimonialsContainerClasses: '',
        testimonialCardClasses: 'bg-[#e8ecf4] border-l-4 border-[#5b8dd8] p-6 mb-6 rounded italic',
        testimonialQuoteClasses: 'text-[#2c3e5f] text-base md:text-lg mb-3',
        testimonialAuthorClasses: 'text-[#2c3e5f] font-bold not-italic text-sm'
    };
}
