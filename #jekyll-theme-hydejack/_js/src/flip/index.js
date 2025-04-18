// Copyright (c) 2019 Florian Klampfer <https://qwtel.com/>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { merge } from 'rxjs';
import { filter } from 'rxjs/operators';

import { setupFLIPTitle } from './title';
import { setupFLIPProject } from './pro/project';

const FLIP_TYPES = ['title', 'projects'];

export function setupFLIP(start$, ready$, fadeIn$, options) {
    const other$ = start$.pipe(filter(({ flipType }) => !FLIP_TYPES.includes(flipType)));

    return merge(
        setupFLIPTitle(start$, ready$, fadeIn$, options),
        setupFLIPProject(start$, ready$, fadeIn$, options),
        other$,
    );
}
