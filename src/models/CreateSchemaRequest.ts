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
/**
 * 
 * @export
 * @interface CreateSchemaRequest
 */
export interface CreateSchemaRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateSchemaRequest
     */
    commitMessage: string;
    /**
     * 
     * @type {object}
     * @memberof CreateSchemaRequest
     */
    contentTypesRaw?: object;
}

/**
 * Check if a given object implements the CreateSchemaRequest interface.
 */
export function instanceOfCreateSchemaRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "commitMessage" in value;

    return isInstance;
}

export function CreateSchemaRequestFromJSON(json: any): CreateSchemaRequest {
    return CreateSchemaRequestFromJSONTyped(json, false);
}

export function CreateSchemaRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSchemaRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commitMessage': json['commitMessage'],
        'contentTypesRaw': !exists(json, 'contentTypesRaw') ? undefined : json['contentTypesRaw'],
    };
}

export function CreateSchemaRequestToJSON(value?: CreateSchemaRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commitMessage': value.commitMessage,
        'contentTypesRaw': value.contentTypesRaw,
    };
}

