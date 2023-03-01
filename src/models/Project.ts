/* tslint:disable */
/* eslint-disable */
/**
 * Core API
 * Core API for KIQR Headless CMS
 *
 * The version of the OpenAPI document: 0.14.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Project
 */
export interface Project {
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     * 
     * @type {Date}
     * @memberof Project
     */
    updatedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Project
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the Project interface.
 */
export function instanceOfProject(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function ProjectFromJSON(json: any): Project {
    return ProjectFromJSONTyped(json, false);
}

export function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'updatedAt': (new Date(json['updatedAt'])),
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function ProjectToJSON(value?: Project | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'updatedAt': (value.updatedAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
    };
}

