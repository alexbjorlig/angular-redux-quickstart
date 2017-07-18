import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class CounterActions{
    static INCREMENT = 'INCREMENT';
    static DECREMENT = 'DECREMENT';

    increment(): Action {
        console.log('Action increment called!');
        return { type: CounterActions.INCREMENT };
    }

    decrement(): Action {
        console.log('Action decrement called!');
        return { type: CounterActions.DECREMENT };
    }

}