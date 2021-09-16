import fs from 'fs';
import path from 'path';
import { CategoriesList } from '@struct_types/categories'
import { faCar, faCogs, faHome, faTshirt, faGlassCheers, faHeartbeat, faTools, faLaptopCode, faHandsHelping, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

function getIcon(iconText: string): IconDefinition {
    switch (iconText) {
        case "faCar":
            return faCar
        case "faCogs":
            return faCogs
        case "faHome":
            return faHome
        case "faTshirt":
            return faTshirt
        case "faGlassCheers":
            return faGlassCheers
        case "faHeartbeat":
            return faHeartbeat
        case "faCogs":
            return faCogs
        case "faTools":
            return faTools
        case "faLaptopCode":
            return faLaptopCode
        case "faHandsHelping":
            return faHandsHelping
        case "faGraduationCap":
            return faGraduationCap
    }
    return faCar;
}

export function getCategoriesList() {

    let list: CategoriesList = new Array() as CategoriesList

    try {
        const categoriesDir = path.join(process.cwd(), 'data/categories.json')
        const json = JSON.parse(fs.readFileSync(categoriesDir, 'utf-8'))

        type categorie = {
            title: string;
            path: string;
            icon: IconDefinition;
        }

        json.forEach((e: { title: string, path: string, icon: string }) => {
            let c: categorie = {
                title: e.title,
                path: e.path,
                icon: getIcon(e.icon),
            }

            list.push(c)
        })
    } catch {
        console.warn('Não existe categorias!')
    }

    return list
}