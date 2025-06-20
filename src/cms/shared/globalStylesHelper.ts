import type {
    DisplaySettingsFragment,
    CompositionStructureNode,
    Maybe,
} from '../../../__generated/sdk.ts';

import { getDictionaryFromDisplaySettings } from '../../graphql/shared/displaySettingsHelpers.ts';

export function getGlobalStyles(component: 
        | Maybe<Maybe<DisplaySettingsFragment>>[]
        | CompositionStructureNode
        | undefined
        | null) {

    var settings;
    if ((component as CompositionStructureNode).displaySettings) {
        settings = (component as CompositionStructureNode).displaySettings as DisplaySettingsFragment[]
    } else {
        settings = (component as DisplaySettingsFragment[]);
    }

    const dictionary = getDictionaryFromDisplaySettings(settings);

    let cssClasses: string[] = [];

    switch (dictionary['backgroundColor']) {
        case 'transparent':
            cssClasses.push('bg-transparent');
            break;
        case 'white':
            cssClasses.push('bg-white');
            break;
        case 'blue':
            cssClasses.push('bg-blue-500');
            break;
        case 'red':
            cssClasses.push('bg-red-500');
            break;



    // switch (column.displayTemplateKey) {

    //     case 'DefaultColumn':
    //         switch (dictionary['contentSpacing']) {
    //             case 'small':
    //                 cssClasses.push('gap-2 py-2');
    //                 break;
    //             case 'medium':
    //                 cssClasses.push('gap-4 py-4');
    //                 break;
    //             case 'large':
    //                 cssClasses.push('gap-8 py-8 lg:gap-8 lg:py-8');
    //                 break;
    //             case 'xl':
    //                 cssClasses.push('gap-12 py-12 lg:gap-24 lg:py-24');
    //                 break;
    //             case 'xxl':
    //                 cssClasses.push('gap-16 py-16 lg:gap-72 lg:py-72');
    //                 break;
    //             default:
    //                 cssClasses.push('gap-0 py-0');
    //                 break;
    //         }

    //         switch (dictionary['justifyContent']) {
    //             case 'center':
    //                 cssClasses.push('justify-center');
    //                 break;
    //             case 'end':
    //                 cssClasses.push('justify-end');
    //                 break;
    //             default:
    //                 cssClasses.push('justify-start');
    //                 break;
    //         }

    //         switch (dictionary['alignContent']) {
    //             case 'center':
    //                 cssClasses.push('content-center');
    //                 break;
    //             case 'end':
    //                 cssClasses.push('content-end');
    //                 break;
    //             default:
    //                 cssClasses.push('content-start');
    //                 break;
    //         }

    //         switch (dictionary['alignItems']) {
    //             case 'center':
    //                 cssClasses.push('items-center');
    //                 break;
    //             case 'end':
    //                 cssClasses.push('items-end');
    //                 break;
    //             default:
    //                 cssClasses.push('items-start');
    //                 break;
    //         }

    //         switch (dictionary['showFrom']) {
    //             case 'fromSmall':
    //                 cssClasses.push('hidden sm:block');
    //                 break;
    //             case 'fromMedium':
    //                 cssClasses.push('hidden md:block');
    //                 break;
    //             case 'fromLarge':
    //                 cssClasses.push('hidden lg:block');
    //                 break;
    //         }

    //         switch (dictionary['minWidth']) {
    //             case 'small':
    //                 cssClasses.push('lg:min-w-[24rem]');
    //                 break;
    //             case 'medium':
    //                 cssClasses.push('lg:min-w-[48rem]');
    //                 break;
    //             case 'large':
    //                 cssClasses.push('lg:min-w-[64rem]');
    //                 break;
    //         }

    //         cssClasses.push('relative top-0');
    //         let useChildContainer = false;
    //         switch (dictionary['overflow']) {
    //             case 'right':
    //                 useChildContainer = true;
    //                 cssClasses.push('left-0');
    //                 break;
    //             case 'left':
    //                 useChildContainer = true;
    //                 cssClasses.push('right-0');
    //                 break;
    //             case 'clip':
    //                 cssClasses.push('overflow-hidden');
    //                 break;
    //         }

    //         switch (dictionary['backgroundColor']) {
    //             case 'transparent':
    //                 cssClasses.push('bg-transparent');
    //                 break;
    //             case 'white':
    //                 cssClasses.push('bg-white');
    //                 break;
    //             case 'blue':
    //                 cssClasses.push('bg-blue-500');
    //                 break;
    //             case 'red':
    //                 cssClasses.push('bg-red-500');
    //                 break;
    //         }

    //         switch (dictionary['testStyle']) {
    //             case 'transparent':
    //                 cssClasses.push('bg-transparent');
    //                 break;
    //             case 'white':
    //                 cssClasses.push('bg-white');
    //                 break;
    //             case 'blue':
    //                 cssClasses.push('bg-blue-500');
    //                 break;
    //             case 'red':
    //                 cssClasses.push('bg-red-500');
    //                 break;
    //         }

    //         break;

        
        // default:
        //     cssClasses.push('vb:NoStyles');
        //     break;
    }

    return cssClasses;
}
