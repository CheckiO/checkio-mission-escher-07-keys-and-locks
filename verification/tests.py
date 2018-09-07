"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""

TESTS = {
    "Basics": [
        {
            "input": ['''
0##0
0##0
00#0
00##
00##''',
'''
00000
000##
#####
##000
00000''']
,
            "answer": True
        },
        {
            "input": ['''
00#0
00#0
00#0
00##
00##''',
'''
00000
0000#
0####
00000
00000'''],
            "answer": False
        }
    ],
    "Extra": [
        {
            "input": ['''
0##0
0##0
0000
0000
0000''',
'''
00000
000##
00###
00000
00000'''],
            "answer": False
        },
        {
            "input": ['''
0000
00#0
00#0
00##
00#0''',
'''
00000
000#0
0####
00000
00000'''],
            "answer": True
        },
        {
            "input": ['''
00#0
0##0
00#0
0##0
00#0''',
'''
00000
00000
00000
#####
0#0#0
00000'''],
            "answer": True
        },
        {
            "input": ['''
###0
0##0
00#0
00##
00##''',
'''
000#0
00###
00###
00000
00000'''],
            "answer": False
        },
            "input": ['''
0##0
0#00
0000''',
'''
##000
#0000
00000
00000
00000'''],
            "answer": True
        },
        {
            "input": ['''
0000
00#0
00#0
0###
00#0''',
'''
00000
000#0
0####
000#0
00000'''],
            "answer": True
        },
        {
            "input": ['''
###0
00#0''',
'''
00000
00000
#0000
###00
0#000
0#000'''],
            "answer": False
        },
        {
            "input": ['''
###
###''',
'''
00000
00###
00###
00000
00000'''],
            "answer": True
        }

    ]
}
