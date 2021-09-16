import { faCar, faCogs, faHome, faTshirt, faGlassCheers, faHeartbeat, faTools, faLaptopCode, faHandsHelping, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type CategoriesList = [{
    title: string
    path: string
    icon: IconDefinition
}]

export interface CategoriesListInterface {
    categories: CategoriesList;
}