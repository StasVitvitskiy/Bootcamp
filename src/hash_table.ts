import {entries} from "~/object_methods";
export class HashTable {
    buckets = [];
    hash(key) {
        //returns hash for the passed key
        // takes in a key, creates a hash for it
        // loops through the string, for every character returns a number
        // (from the table of numbers for each char) and adds it to the sum variable which initially starts at 0;
        // returns sum;
        const stringKey = String(key);
        let sum = 0;
        for(let i = 0; i < stringKey.length; i++) {
            sum += stringKey.charCodeAt(i);
        }
        return sum;
    }
    set(key, value) {
        const bucket = this.findBucket(key);
        const hash = this.hash(key);
        if(bucket == undefined) {
            this.buckets.push([
                hash,
                [
                    [key, value]
                ]
            ])
        } else {
            const entry = this.findEntry(key, bucket);
            if(entry == undefined) {
                bucket[1].push([key, value]);
            } else {
                entry[1] = value;
            }
        }
     }
    get(key) {
        const bucket = this.findBucket(key);
        if(bucket == undefined) {
            return undefined;
        }
        const entry = this.findEntry(key, bucket);
        if(entry == undefined) {
            return undefined;
        }
        return entry[1];

    }
    has(key) {
        const bucket = this.findBucket(key);
        if(bucket == undefined) {
            return false;
        }
        const entry = this.findEntry(key, bucket);
        if(entry == undefined) {
            return false;
        }
        return true;

    }
    remove(key) {
        const bucket = this.findBucket(key);
        if(bucket != undefined) {
            bucket[1] =  bucket[1].filter((el) => {
                return el[0] != key;
            })
        }

    }
    getKeys() {
        return this.buckets.reduce((acc, cur) => {
            return acc.concat(cur[1].map((el) => {
                return el[0];
            }))
        }, [])
    }
    getValues() {
        return this.buckets.reduce((acc, cur) => {
            return acc.concat(cur[1].map((el) => {
                return el[1];
            }))
        }, [])
    }
    findBucket(key) {
        const hash = this.hash(key);
        return this.buckets.find((el) => {
            return el[0] == hash;
        });
    }
    findEntry(key, bucket) {
        return bucket[1].find((el) => {
            return el[0] == key;
        })
    }
}
