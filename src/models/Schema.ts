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
import type { ContentType } from './ContentType';
import {
    ContentTypeFromJSON,
    ContentTypeFromJSONTyped,
    ContentTypeToJSON,
} from './ContentType';

/**
 * 
 * @export
 * @interface Schema
 */
export interface Schema {
    /**
     * 
     * @type {string}
     * @memberof Schema
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Schema
     */
    commitMessage: string;
    /**
     * 
     * @type {Array<ContentType>}
     * @memberof Schema
     */
    contentTypes?: Array<ContentType>;
    /**
     * 
     * @type {Date}
     * @memberof Schema
     */
    updatedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Schema
     */
    createdAt: Date;
}

/**
 * Check if a given object implements the Schema interface.
 */
export function instanceOfSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "commitMessage" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function SchemaFromJSON(json: any): Schema {
    return SchemaFromJSONTyped(json, false);
}

export function SchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'commitMessage': json['commitMessage'],
        'contentTypes': !exists(json, 'contentTypes') ? undefined : ((json['contentTypes'] as Array<any>).map(ContentTypeFromJSON)),
        'updatedAt': (new Date(json['updatedAt'])),
        'createdAt': (new Date(json['createdAt'])),
    };
}

export function SchemaToJSON(value?: Schema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'commitMessage': value.commitMessage,
        'contentTypes': value.contentTypes === undefined ? undefined : ((value.contentTypes as Array<any>).map(ContentTypeToJSON)),
        'updatedAt': (value.updatedAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
    };
}

