/**
 * Publisher data access helpers for retrieving publisher records from the local SQLite database.
 * These helpers are used during static page generation to populate navigation and catalog data.
 */
import { asc } from 'drizzle-orm';
import { publishers } from '../../db/schema';
import type { Database } from './db';
import type { Publisher } from '../types/game';

/**
 * Fetches all publishers sorted alphabetically by name.
 *
 * @param db - The database instance used to query publisher records.
 * @returns A list of publishers ordered by their display name.
 */
export async function getAllPublishers(db: Database): Promise<Publisher[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}
