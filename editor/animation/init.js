//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $) {
        function keysAndLocksCanvas(dom, input, degree, answer) {
            const attr = {
                hosoi: {
                    'stroke': '#6FB3DE',
                    "stroke-width": 0,
                    'fill': '#FA8F00',
                },
                siro: {
                    'stroke': 'white',
                    "stroke-width":"0.5",
                    'fill': 'white',
                },
                number: {
                    'stroke': 'darkblue',
                    "stroke-width": 0.5,
                    'fill': 'darkblue',
                    'font-size': '22px',
                },
                text: {
                    'stroke-width': 0,
                    'fill': '#2B4373',
                    'font-size': '10px',
                },
                rect: {
                    empty: {
                        'stroke': '#2080B8',
                        'stroke-width': 0.5,
                    },
                    match: {
                        'stroke': '#2080B8',
                        'stroke-width': 1,
                        'fill': '#FA9D00',
                    },
                    unmatch: {
                        'stroke': '#2080B8',
                        'stroke-width': 1,
                        'fill': '#6FB3DE',
                    },
                },
            };

            /*----------------------------------------------*
             *
             * compass map spyglass
             *
             *----------------------------------------------*/
            const SIZE = 15; 
            const os = 32;

            const paper = Raphael(dom, SIZE*20+os*2+10, SIZE*10+os*2, 0, 0);

            const lock_ary = input[0].split('\n').filter(x=>x.length);
            const key_ary = input[1].split('\n').filter(x=>x.length);
            const [lw, lh] = [lock_ary[0].length, lock_ary.length];
            const [kw, kh] = [key_ary[0].length, key_ary.length];

            const key_s = paper.set();
            const solid_s = paper.set();

            // draw lock
            const lock_offset_h = (10 - lh) / 2 * 15;
            const lock_offset_w = (10 - lw) / 2 * 15;
            for (let i=0; i < lh; i += 1) {
                for (let j=0; j < lw; j += 1) {
                    const l_rect = paper.rect(
                        SIZE*j+os + lock_offset_w,
                        SIZE*i+os + lock_offset_h,
                        SIZE, SIZE).attr(lock_ary[i][j] === '#'
                            ? attr.rect.unmatch: attr.rect.empty);
                    if (lock_ary[i][j] === '#') {
                        solid_s.push(l_rect);
                    }
                }
            }

            paper.text(
                lock_offset_w+os+7.5,
                lock_offset_h+os+7.5, 'L').attr(attr.text);

            // draw key 
            const key_offset_h = (10 - kh) / 2 * 15;
            const key_offset_w = (10 - kw) / 2 * 15;

            for (let i=0; i < kh; i += 1) {
                for (let j=0; j < kw; j += 1) {
                    const k_rect = paper.rect(
                        SIZE*j+os+160 + key_offset_w,
                        SIZE*i+os + key_offset_h,
                        SIZE, SIZE).attr(key_ary[i][j] === '#'
                            ? attr.rect.unmatch: attr.rect.empty);
                    key_s.push(k_rect);
                    if (key_ary[i][j] === '#') {
                        solid_s.push(k_rect);
                    }
                }
            }

            key_s.push(
                paper.text(
                    key_offset_w+os+7.5+160,
                    key_offset_h+os+7.5, 'K').attr(attr.text)
            );

            const fn = function(){
                solid_s.animate(attr.rect.match, 500);
            };

            if (answer) {
                if (degree) {
                    key_s.animate(
                        {transform: 'r' + degree + ','
                            +(SIZE*5+os+160)+','+(SIZE*5+os)},
                        1000, '<>', fn);
                } else {
                    solid_s.animate(attr.rect.match, 500);
                }

            }
        }
        
        var $tryit;

        var io = new extIO({
            multipleArguments: true,
            functions: {
                python: 'keys_and_locks',
                js: 'keysAndLocks'
            },
            animation: function($expl, data){
                keysAndLocksCanvas($expl[0],
                    data.in, data.ext.explanation, data.ext.answer);
            }
        });
        io.start();
    }
);
