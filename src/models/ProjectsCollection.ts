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
import type { Project } from './Project';
import {
    ProjectFromJSON,
    ProjectFromJSONTyped,
    ProjectToJSON,
} from './Project';
import type { ProjectsCollectionMeta } from './ProjectsCollectionMeta';
import {
    ProjectsCollectionMetaFromJSON,
    ProjectsCollectionMetaFromJSONTyped,
    ProjectsCollectionMetaToJSON,
} from './ProjectsCollectionMeta';

/**
 * 
 * @export
 * @interface ProjectsCollection
 */
export interface ProjectsCollection {
    /**
     * 
     * @type {Array<Project>}
     * @memberof ProjectsCollection
     */
    projects: Array<Project>;
    /**
     * 
     * @type {ProjectsCollectionMeta}
     * @memberof ProjectsCollection
     */
    meta: ProjectsCollectionMeta;
}

/**
 * Check if a given object implements the ProjectsCollection interface.
 */
export function instanceOfProjectsCollection(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projects" in value;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function ProjectsCollectionFromJSON(json: any): ProjectsCollection {
    return ProjectsCollectionFromJSONTyped(json, false);
}

export function ProjectsCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projects': ((json['projects'] as Array<any>).map(ProjectFromJSON)),
        'meta': ProjectsCollectionMetaFromJSON(json['meta']),
    };
}

export function ProjectsCollectionToJSON(value?: ProjectsCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'projects': ((value.projects as Array<any>).map(ProjectToJSON)),
        'meta': ProjectsCollectionMetaToJSON(value.meta),
    };
}

