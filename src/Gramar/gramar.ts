/* parser generated by jison 0.0.5 */
/**
 * Returns a Parser object implementing JisonParserApi:
 */
export const gramar = (function(){
type ParseErrorHashType = {
  /** matched text */
  text: string;
  /** the produced terminal token, if any */
  token: string | number;
  /** yylineno */
  line: number;
  /** yylloc */
  loc: TokenLocation;
  /** string describing the set of expected tokens */
  expected: string[];
  /** TRUE when the parser has a error recovery rule available for this particular error */
  recoverable: boolean;
}
type ParseErrorType = (str:string, hash:ParseErrorHashType) => void;
interface LexerType {
  EOF: number;
  parseError: ParseErrorType;
  setInput: (input: string, yy:any ) => LexerType;
  input: () => string;
  unput: (str:string) => LexerType;
  more: () => LexerType;
  less: (n:number) => void;
  pastInput: () => string;
  upcomingInput: () => string;
  showPosition: () => string;
  test_match: (regex_match_array:RegExpMatchArray|null, rule_index:any) => string | number | false;
  next: () => number|boolean;
  lex: () => number|boolean;
  begin: (condition: string) => void;
  popState: () => string;
  _currentRules: () => number[];
  topState: (n:number) => string;
  pushState: (condition: string) => void;
  options: {
    /** token location info will include a .range[] member */
    ranges?: boolean;
    /** flex-like lexing behaviour where the rules are tested exhaustively to find the longest match */
    flex?: boolean;
    /** lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code */
    backtrack_lexer?: boolean;
  };

  performAction: (yy: any, yy_: any, $avoiding_name_collisions: number, YY_START: any) => any;
  rules: RegExp[];
  conditions: {[name: string]: number[] /* set */ };
  yy?: any;
  reject: () => LexerType;
  stateStackSize: () => number;
  yylloc: TokenLocation;
  yyleng: number;
  yytext?: string;
  match?: string;
  yylineno?: number;
}
interface TokenLocation {
  first_line: number;
  first_column: number;
  last_line: number;
  last_column: number;
  /** where the numbers are indexes into the input string, regular zero-based */
  range?: [number, number];
}
interface StateType {
  [key:number]: number|number[]
}
interface JisonParserApi {
  trace: (str?:string) => void;
  performAction: (yytext:string, yyleng:number, yylineno:number, yy:any, yystate:any /* action[1] */, $$:any /* vstack */, _$:any /* lstack */) => any;
  parseError: ParseErrorType;
  parse: (input: string) => void;
}
type SymbolsType = {[key:string]: number}
type TerminalsType = {[key:number]: string}  
type ProductionsType = Array<number|number[]>

// Function that extends an object with the given value for all given keys
// e.g., o([1, 3, 4], [6, 7], { x: 1, y: 2 }) = { 1: [6, 7]; 3: [6, 7], 4: [6, 7], x: 1, y: 2 }
function o (k:number[], v:number[], o?:StateType) {
  let l = k.length;
  for(o = o || {}; l--; o[k[l]] = v)
    ;
  return o;
}

const $V0=[1,3],$V1=[1,4],$V2=[1,5],$V3=[1,6],$V4=[1,7],$V5=[1,9],$V6=[1,10],$V7=[1,11],$V8=[1,12],$V9=[1,13],$Va=[1,14],$Vb=[1,15],$Vc=[5,6,7,8,9,10,11,12,14],$Vd=[5,6,7,14],$Ve=[5,6,7,8,9,14];

class ParserClass implements JisonParserApi {
  public yy: any = {};
  public lexer?: LexerType;
  public Parser?: ParserClass;
  $?: any;

  symbols_: SymbolsType = {"error":2,"expressions":3,"e":4,"EOF":5,"+":6,"-":7,"*":8,"/":9,"^":10,"!":11,"%":12,"(":13,")":14,"NUMBER":15,"E":16,"PI":17,"$accept":0,"$end":1};
  terminals_: TerminalsType = {2:"error",5:"EOF",6:"+",7:"-",8:"*",9:"/",10:"^",11:"!",12:"%",13:"(",14:")",15:"NUMBER",16:"E",17:"PI"};
  productions_: ProductionsType = [0,[3,2],[4,3],[4,3],[4,3],[4,3],[4,3],[4,2],[4,2],[4,2],[4,3],[4,1],[4,1],[4,1]];
  table: Array<StateType> = [{3:1,4:2,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{1:[3]},{5:[1,8],6:$V5,7:$V6,8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb},{4:16,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{4:17,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},o($Vc,[2,11]),o($Vc,[2,12]),o($Vc,[2,13]),{1:[2,1]},{4:18,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{4:19,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{4:20,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{4:21,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},{4:22,7:$V0,13:$V1,15:$V2,16:$V3,17:$V4},o($Vc,[2,7]),o($Vc,[2,8]),o($Vc,[2,9]),{6:$V5,7:$V6,8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb,14:[1,23]},o($Vd,[2,2],{8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb}),o($Vd,[2,3],{8:$V7,9:$V8,10:$V9,11:$Va,12:$Vb}),o($Ve,[2,4],{10:$V9,11:$Va,12:$Vb}),o($Ve,[2,5],{10:$V9,11:$Va,12:$Vb}),o([5,6,7,8,9,10,14],[2,6],{11:$Va,12:$Vb}),o($Vc,[2,10])];
  defaultActions: {[key:number]: any} = {8:[2,1]};

  constructor () {
    this.yy = {};
  }

  trace (str?:string): any { }

  performAction (yytext:string, yyleng:number, yylineno:number, yy:any, yystate:number /* action[1] */, $$:any /* vstack */, _$:any /* lstack */): any {
/* this == yyval */
    var $0 = $$.length - 1;
    switch (yystate) {
case 1:
 typeof console !== 'undefined' ? console.log($$[$0-1]) : print($$[$0-1]);
          return $$[$0-1]; 
break;
case 2:
this.$ = $$[$0-2]+$$[$0];
break;
case 3:
this.$ = $$[$0-2]-$$[$0];
break;
case 4:
this.$ = $$[$0-2]*$$[$0];
break;
case 5:
this.$ = $$[$0-2]/$$[$0];
break;
case 6:
this.$ = Math.pow($$[$0-2], $$[$0]);
break;
case 7:

          this.$ = (function fact (n) { return n==0 ? 1 : fact(n-1) * n })($$[$0-1]);
        
break;
case 8:
this.$ = $$[$0-1]/100;
break;
case 9:
this.$ = -$$[$0];
break;
case 10:
this.$ = $$[$0-1];
break;
case 11:
this.$ = Number(yytext);
break;
case 12:
this.$ = Math.E;
break;
case 13:
this.$ = Math.PI;
break;
    }
  }

parseError (str: string, hash: ParseErrorHashType): void {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        (<any>error).hash = hash;
        throw error;
    }
}
 
parse (input: string) {
    var self = this,
        stack = [0],
        tstack = [], // token stack
        vstack:Array<string|null> = [null], // semantic value stack
        lstack:Array<TokenLocation> = [], // location stack
        table = this.table,
        yytext = '',
        yylineno = 0,
        yyleng = 0,
        recovering = 0,
        TERROR = 2,
        EOF = 1;

    var args = lstack.slice.call(arguments, 1);

    //this.reductionCount = this.shiftCount = 0;
    var lexer: LexerType = Object.create(this.lexer!) as LexerType;

    var typedYy: {[key: string]: any;} = {}
    var sharedState = { yy: typedYy };
    // copy state
    for (var k in this.yy) {
      if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
        sharedState.yy[k] = this.yy[k];
      }
    }

    lexer.setInput(input, sharedState.yy);
    (<any>sharedState.yy).lexer = lexer;
    (<any>sharedState.yy).parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = <TokenLocation>{};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);

    var ranges = lexer.options && lexer.options.ranges;

    if (typeof (<any>sharedState.yy).parseError === 'function') {
        this.parseError = (<any>sharedState.yy).parseError;
    }

    function popStack (n: number) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }

_token_stack:
    var lex = function () {
        var token:number;
        // @ts-ignore
        token = (lexer.lex() || EOF);
        // if token isn't its numeric value, convert
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }

    var symbol:number|null, preErrorSymbol, state, action, a, r, yyval:{'$'?: any, '_$'?: any, lexer?: any} = {}, p, len, newState, expected;
    while (true) {
        // retreive state number from top of stack
        state = stack[stack.length - 1];

        // use default actions if available
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol! === null || typeof symbol! == 'undefined') {
                symbol = lex();
            }
            // read action for current state and first input
            action = table[state] && table[state][symbol];
        }

_handle_error:
        // handle parse error
        if (typeof action === 'undefined' || !action.length || !action[0]) {
            var error_rule_depth: number | null = null;
            var errStr = '';

            if (!recovering) {
                // first see if there's any chance at hitting an error recovery rule:
                error_rule_depth = locateNearestErrorRecoveryRule(state);

                // Report error
                expected = [];
                for (const _p in table[state]) {
                    p = Number(p);
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push("'"+this.terminals_[p]+"'");
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line '+(yylineno+1)+":\n"+lexer.showPosition()+"\nExpecting "+expected.join(', ') + ", got '" + (this.terminals_[symbol!] || symbol!)+ "'";
                } else {
                    errStr = 'Parse error on line '+(yylineno+1)+": Unexpected " +
                                  (symbol! == EOF ? "end of input" :
                                              ("'"+(this.terminals_[symbol!] || symbol!)+"'"));
                }
                this.parseError(errStr, {
                    text: lexer.match!,
                    token: this.terminals_[symbol!] || symbol!,
                    line: lexer.yylineno!,
                    loc: yyloc,
                    expected: expected,
                    recoverable: (error_rule_depth !== null)
                });
            } else if (preErrorSymbol !== EOF) {
                error_rule_depth = locateNearestErrorRecoveryRule(state);
            }

            // just recovered from another error
            if (recovering == 3) {
                if (symbol! === EOF || preErrorSymbol === EOF) {
                    throw new Error(errStr || 'Parsing halted while starting to recover from another error.');
                }

                // discard current lookahead and grab another
                yyleng = lexer.yyleng;
                yytext = lexer.yytext!;
                yylineno = lexer.yylineno!;
                yyloc = lexer.yylloc;
                symbol = lex();
            }

            // try to recover from error
            if (error_rule_depth === null) {
                throw new Error(errStr || 'Parsing halted. No suitable error recovery rule available.');
            }
            popStack(error_rule_depth || 0);

            preErrorSymbol = (symbol! == TERROR ? null : symbol!); // save the lookahead token
            symbol = TERROR;         // insert generic error symbol as new lookahead
            state = stack[stack.length-1];
            action = table[state] && table[state][TERROR];
            recovering = 3; // allow 3 real symbols to be shifted before reporting a new error
        }

        // this shouldn't happen, unless resolve defaults are off
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: '+state+', token: '+symbol!);
        }

        switch (action[0]) {
            case 1: // shift
                //this.shiftCount++;

                stack.push(symbol!);
                vstack.push(lexer.yytext!);
                lstack.push(lexer.yylloc);
                stack.push(action[1]); // push state
                symbol = null;
                if (!preErrorSymbol) { // normal execution/no error
                    yyleng = lexer.yyleng;
                    yytext = lexer.yytext!;
                    yylineno = lexer.yylineno!;
                    yyloc = lexer.yylloc;
                    if (recovering > 0) {
                        recovering--;
                    }
                } else {
                    // error just occurred, resume old lookahead f/ before error
                    symbol = preErrorSymbol;
                    preErrorSymbol = null;
                }
                break;

            case 2:
                // reduce
                //this.reductionCount++;

                len = (this.productions_[action[1]] as number[])[1];

                // perform semantic action
                yyval.$ = vstack[vstack.length-len]; // default to $$ = $1
                // default location, uses first token for firsts, last for lasts
                yyval._$ = {
                    first_line: lstack[lstack.length-(len||1)].first_line,
                    last_line: lstack[lstack.length-1].last_line,
                    first_column: lstack[lstack.length-(len||1)].first_column,
                    last_column: lstack[lstack.length-1].last_column
                };
                if (ranges) {
                  yyval._$.range = [lstack[lstack.length-(len||1)].range![0], lstack[lstack.length-1].range![1]];
                }
                // @ts-ignore
                r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args));

                if (typeof r !== 'undefined') {
                    return r;
                }

                // pop off stack
                if (len) {
                    stack = stack.slice(0,-1*len*2);
                    vstack = vstack.slice(0, -1*len);
                    lstack = lstack.slice(0, -1*len);
                }

                stack.push((this.productions_[action[1]] as number[])[0]);    // push nonterminal (reduce)
                vstack.push(yyval.$);
                lstack.push(yyval._$);
                // goto new state = table[STATE][NONTERMINAL]
                newState = table[stack[stack.length-2]][stack[stack.length-1]];
                stack.push(newState as number);
                break;

            case 3:
                // accept
                return true;
        }

    }

    return true;


    // Return the rule stack depth where the nearest error rule can be found.
    // Return FALSE when no error recovery rule was found.
    function locateNearestErrorRecoveryRule(state: number): number | null {
        var stack_probe = stack.length - 1;
        var depth = 0;

        // try to recover from error
        for(;;) {
            // check for error recovery rule in this state
            if ((TERROR.toString()) in table[state]) {
                return depth;
            }
            if (state === 0 || stack_probe < 2) {
                return null; // No suitable error recovery rule available.
            }
            stack_probe -= 2; // popStack(1): [symbol, action]
            state = stack[stack_probe];
            ++depth;
        }
    }
  }
}
var parser = new ParserClass();

    /*this segment is for the get to requieres and use it in the gramar
     *for example: let expression = require(../AST/Expression);
    */
var lexer = (/* generated by ts-jison-lex 0.0.2 */function(){
class LexerClass implements LexerType {
  public yy: any = {};

  public EOF:number = 1;
  options: any = {"case-sensitive":true};

  _input?: string;
  _more?: boolean;
  _backtrack?: boolean;
  done?: boolean;
  yylineno?: number;
  yyleng: number = 0;
  yytext?: string;
  conditionStack?: string[];
  match?: string;
  matches?: RegExpMatchArray|null;
  matched?: string;
  yylloc: TokenLocation = {
      first_line: 1,
      first_column: 0,
      last_line: 1,
      last_column: 0
    };
  offset?: number;

  parseError (str: string, hash: {[key: string]: any}): void {
    if (this.yy.parser) {
      this.yy.parser.parseError(str, hash);
    } else {
      throw new Error(str);
    }
  }

// resets the lexer, sets new input
  setInput (input:string, yy:any): LexerClass {
    this.yy = yy || this.yy || {};
    this._input = input;
    this._more = this._backtrack = this.done = false;
    this.yylineno = this.yyleng = 0;
    this.yytext = this.matched = this.match = '';
    this.conditionStack = ['INITIAL'];
    this.yylloc = {
      first_line: 1,
      first_column: 0,
      last_line: 1,
      last_column: 0
    };
    if (this.options.ranges) {
      this.yylloc.range = [0,0];
    }
    this.offset = 0;
    return this;
  }

// consumes and returns one char from the input
  input (): string {
    var ch = this._input![0];
    this.yytext += ch;
    this.yyleng++;
    this.offset!++;
    this.match += ch;
    this.matched += ch;
    var lines = ch.match(/(?:\r\n?|\n).*/g);
    if (lines) {
      this.yylineno!++;
      this.yylloc.last_line++;
    } else {
      this.yylloc.last_column++;
    }
    if (this.options.ranges) {
      this.yylloc.range![1]++;
    }

    this._input = this._input!.slice(1);
    return ch;
  }

// unshifts one char (or a string) into the input
  unput (ch:string): LexerClass {
    var len = ch.length;
    var lines = ch.split(/(?:\r\n?|\n)/g);

    this._input = ch + this._input;
    this.yytext = this.yytext!.substr(0, this.yytext!.length - len);
    //this.yyleng -= len;
    this.offset! -= len;
    var oldLines = this.match!.split(/(?:\r\n?|\n)/g);
    this.match = this.match!.substr(0, this.match!.length - 1);
    this.matched = this.matched!.substr(0, this.matched!.length - 1);

    if (lines.length - 1) {
      this.yylineno! -= lines.length - 1;
    }
    var r = this.yylloc.range;

    var yylloc:TokenLocation = {
      first_line: this.yylloc.first_line,
      last_line: this.yylineno! + 1,
      first_column: this.yylloc.first_column,
      last_column: lines ?
        (lines.length === oldLines.length ? this.yylloc.first_column : 0)
        + oldLines[oldLines.length - lines.length].length - lines[0].length :
      this.yylloc.first_column - len
    };
    this.yylloc = yylloc;

    if (this.options.ranges) {
      this.yylloc.range = [r![0], r![0] + this.yyleng - len];
    }
    this.yyleng = this.yytext.length;
    return this;
  }

  // When called from action, caches matched text and appends it on next action
  more (): LexerClass {
    this._more = true;
    return this;
  }

  // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
  reject (): LexerClass {
    if (this.options.backtrack_lexer) {
      this._backtrack = true;
    } else {
      return <LexerClass><unknown>this.parseError('Lexical error on line ' + (this.yylineno! + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
        text: "",
        token: null,
        line: this.yylineno
      });

    }
    return this;
  }

  // retain first n characters of the match
  less (n:number): void {
    this.unput(this.match!.slice(n));
  }

  // displays already matched input, i.e. for error messages
  pastInput (): string {
    var past = this.matched!.substr(0, this.matched!.length - this.match!.length);
    return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
  }

  // displays upcoming input, i.e. for error messages
  upcomingInput () {
    var next = this.match;
    if (next!.length < 20) {
      next += this._input!.substr(0, 20 - next!.length);
    }
    return (next!.substr(0,20) + (next!.length > 20 ? '...' : '')).replace(/\n/g, "");
  }

  // displays the character position where the lexing error occurred, i.e. for error messages
  showPosition () {
    var pre = this.pastInput();
    var c = new Array(pre.length + 1).join("-");
    return pre + this.upcomingInput() + "\n" + c + "^";
  }

  // test the lexed token: return FALSE when not a match, otherwise return token
  test_match (match: RegExpMatchArray|null, indexed_rule: any) {
    var token,
    lines,
    backup:LexerType;

    if (this.options.backtrack_lexer) {
      // save context
      backup = <any>{
        yylineno: this.yylineno!,
        yylloc: {
          first_line: this.yylloc.first_line,
          last_line: this.yylloc.last_line,
          first_column: this.yylloc.first_column,
          last_column: this.yylloc.last_column
        },
        yytext: this.yytext,
        match: this.match,
        matches: this.matches,
        matched: this.matched,
        yyleng: this.yyleng,
        offset: this.offset,
        _more: this._more,
        _input: this._input,
        yy: this.yy,
        conditionStack: this.conditionStack!.slice(0),
        done: this.done
      };
      if (this.options.ranges) {
        backup.yylloc.range = <[number, number]>(this.yylloc.range!.slice(0));
      }
    }

    lines = match![0].match(/(?:\r\n?|\n).*/g);
    if (lines) {
      this.yylineno! += lines.length;
    }
    this.yylloc = {
      first_line: this.yylloc.last_line,
      last_line: this.yylineno! + 1,
      first_column: this.yylloc.last_column,
      last_column: lines ?
        lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)![0].length :
        this.yylloc.last_column + match![0].length
    };
    this.yytext += match![0];
    this.match += match![0];
    this.matches = match;
    this.yyleng = this.yytext!.length;
    if (this.options.ranges) {
      this.yylloc.range = [this.offset!, this.offset! += this.yyleng];
    }
    this._more = false;
    this._backtrack = false;
    this._input = this._input!.slice(match![0].length);
    this.matched += match![0];
    token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack![this.conditionStack!.length - 1]);
    if (this.done && this._input) {
      this.done = false;
    }
    if (token) {
      return token;
    } else if (this._backtrack) {
      // recover context
      for (var k in backup!) { // what's the typescript-y way to copy fields across?
        (<any>this)[k] = (<any>backup)[k];
      }
      return false; // rule action called reject() implying the next rule should be tested instead.
    }
    return false;
  }

  // return next match in input
  next (): number|boolean {
    if (this.done) {
      return this.EOF;
    }
    if (!this._input) {
      this.done = true;
    }

    var token,
    match:RegExpMatchArray|null = null,
    tempMatch:RegExpMatchArray|null,
    index: number;
    if (!this._more) {
      this.yytext = '';
      this.match = '';
    }
    var rules = this._currentRules();
    for (var i = 0; i < rules.length; i++) {
      tempMatch = this._input!.match(this.rules[rules[i]]);
      if (tempMatch && (!match || tempMatch[0].length > match![0].length)) {
        match = tempMatch;
        index = i;
        if (this.options.backtrack_lexer) {
          token = this.test_match(tempMatch, rules[i]);
          if (token !== false) {
            return <number | boolean>token;
          } else if (this._backtrack) {
            match = null;
            continue; // rule action called reject() implying a rule MISmatch.
          } else {
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
          }
        } else if (!this.options.flex) {
          break;
        }
      }
    }
    if (match) {
      token = this.test_match(match, rules[index!]);
      if (token !== false) {
        return <number | boolean>token;
      }
      // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
      return false;
    }
    if (this._input === "") {
      return this.EOF;
    } else {
      return <number | boolean><unknown>this.parseError('Lexical error on line ' + (this.yylineno! + 1) + '. Unrecognized text.\n' + this.showPosition(), {
        text: "",
        token: null,
        line: this.yylineno
      });
    }
  }

  // return next match that has a token
  lex (): number | boolean {
    var r = this.next();
    if (r) {
      return r;
    } else {
      return this.lex();
    }
  }

  // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
  begin (condition:string) {
    this.conditionStack!.push(condition);
  }

  // pop the previously active lexer condition state off the condition stack
  popState (): string {
    var n = this.conditionStack!.length - 1;
    if (n > 0) {
      return this.conditionStack!.pop()!;
    } else {
      return this.conditionStack![0];
    }
  }

  // produce the lexer rule set which is active for the currently active lexer condition state
  _currentRules () {
    if (this.conditionStack!.length && this.conditionStack![this.conditionStack!.length - 1]) {
      return this.conditions[this.conditionStack![this.conditionStack!.length - 1]].rules;
    } else {
      return this.conditions["INITIAL"].rules;
    }
  }

  // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
  topState (n:number) {
    n = this.conditionStack!.length! - 1 - Math.abs(n || 0);
    if (n >= 0) {
      return this.conditionStack![n];
    } else {
      return "INITIAL";
    }
  }

  // alias for begin(condition)
  pushState (condition:string) {
    this.begin(condition);
  }

  // return the number of states currently on the stack
  stateStackSize (): number {
    return this.conditionStack!.length;
  }

  performAction (yy:any,yy_:any,$avoiding_name_collisions:any,YY_START:any) {
    var YYSTATE=YY_START;
    switch($avoiding_name_collisions) {
    case 0:/* skip whitespace */
      break;
    case 1:return 15   //it is a number
      break;
    case 2:return 8        //it is a multiplication
      break;
    case 3:return 9        //it is a division
      break;
    case 4:return 7        //it is a subtraction
      break;
    case 5:return 6        //it is a addition
      break;
    case 6:return 10        //it is a power
      break;
    case 7:return 11        //it is a factorial
      break;
    case 8:return 12        //it is a modulo
      break;
    case 9:return 13        //it is a open parenthesis
      break;
    case 10:return 14        //it is a close parenthesis
      break;
    case 11:return 17       //it is a pi
      break;
    case 12:return 16        //it is a e
      break;
    case 13:return 5      //it is the end of the file
      break;
    case 14:return 'INVALID'  //it is invalid
      break;
    }
  }

  rules: RegExp[] = [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:!)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:$)/,/^(?:.)/];

  conditions: any = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"inclusive":true}}
}
return new LexerClass();
})();
parser.lexer = lexer;
return parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramar;
exports.Parser = gramar.Parser;
exports.parse = function () { return gramar.parse.apply(gramar, arguments[0]); };
// @ts-ignore;
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}