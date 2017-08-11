import { ANTLRInputStream, CharStream, CommonTokenStream, Token } from 'antlr4ts';
import {ExprLexer} from "./ExprLexer";
import {ExprParser} from "./ExprParser";


class mLexer extends ExprLexer {
    emit(token:Token):Token {
        super.emit(token);
         this.buffer.push(token);
         return token;
     }
}
let inputStream = new ANTLRInputStream("1+2\n");
let lexer = new ExprLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new ExprParser(tokenStream);
let result = parser.prog();
