import {Injectable} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {USERS} from './mock-users';
import {ResponseOptions, Response} from '@angular/http';



@Injectable()
export class MockBackendService {
    constructor(
        private backend: MockBackend
    ) {}

    start(): void {
        console.log('MockBackendService start');
        this.backend.connections.subscribe((c: MockConnection) => {
            console.log('mockConnection url:: ' + c.request.url);
            const URL = "http://localhost:8080/users";
            const usersRegEx = /\/users\/([0-9]+)/i;
 
 
            if (c.request.url === URL && c.request.method === 0) {
                console.log(JSON.stringify(USERS));
                c.mockRespond(new Response(new ResponseOptions({
                    body: JSON.stringify(USERS)
                })));
            } else if (c.request.url.match(usersRegEx) && c.request.method === 0) {
                let matches = USERS.filter((hero) => {
                    return users.id === +(c.request.url.match(usersRegEx)[1])
                });
                c.mockRespond(new Response( new ResponseOptions({
                    body: JSON.stringify(matches[0])
                })));
            }
        });
    }
}