/* tslint:disable */
/* eslint-disable */
/**
 * Core API
 * Core API for KIQR Headless CMS
 *
 * The version of the OpenAPI document: 0.16.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PaginationMeta } from './PaginationMeta';
import {
    PaginationMetaFromJSON,
    PaginationMetaFromJSONTyped,
    PaginationMetaToJSON,
} from './PaginationMeta';

/**
 * 
 * @export
 * @interface ProjectsCollectionMeta
 */
export interface ProjectsCollectionMeta {
    /**
     * 
     * @type {PaginationMeta}
     * @memberof ProjectsCollectionMeta
     */
    pagination: PaginationMeta;
}

/**
 * Check if a given object implements the ProjectsCollectionMeta interface.
 */
export function instanceOfProjectsCollectionMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "pagination" in value;

    return isInstance;
}

export function ProjectsCollectionMetaFromJSON(json: any): ProjectsCollectionMeta {
    return ProjectsCollectionMetaFromJSONTyped(json, false);
}

export function ProjectsCollectionMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsCollectionMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pagination': PaginationMetaFromJSON(json['pagination']),
    };
}

export function ProjectsCollectionMetaToJSON(value?: ProjectsCollectionMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pagination': PaginationMetaToJSON(value.pagination),
    };
}

