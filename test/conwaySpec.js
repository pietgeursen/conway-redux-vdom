var expect = require('expect.js')
var conway = require('../conway.js')

describe('overPopulated', function () {
    it ('should return true with cell count >= 3', function () {
        expect(conway.overPopulated(3)).to.be(true) 
    })
    it ('should return false with cell count < 3', function () {
        expect(conway.overPopulated(2)).to.be(false) 
    })
})

describe('underPopulated', function () {
    it ('should return true with cell count < 2', function () {
        expect(conway.underPopulated(1)).to.be(true) 
    })
    it ('should return false with cell count < 3', function () {
        expect(conway.underPopulated(2)).to.be(false) 
    })
})
describe('ressurectable', function () {
    it ('should return true with cell count == 3', function () {
        expect(conway.ressurectable(3)).to.be(true) 
    })
    it ('should return false with cell count != 3', function () {
        expect(conway.ressurectable(2)).to.be(false) 
    })
})
describe('outOfBounds', function(){
    it ('returns true with an index < 0',function(){
        expect(conway.outOfBounds(-1, [])).to.be(true)
    })
    it ('returns true with an index larger >= array.length',function(){
        expect(conway.outOfBounds(1, [])).to.be(true)
    })
    it ('returns false with a valid index',function(){
        expect(conway.outOfBounds(0, [1])).to.be(false)
    })

} )
describe('create board', function () {
    it ('should create a 2d array of the given dimensions', function () {
        var board = conway.createBoard(10)
        expect(board.length).to.be(10)
        expect(board[9].length).to.be(10)
    })
})
describe('count alive neighbours',function(){
    xit('return 8 for a cell with all alive neighbours', function(){
        var board = conway.createBoard(10)
        board[0][1] = true
        expect(conway.countAliveNeighbours(3, 3, board)).to.eq(8)
    })
    xit('return 3 for a corner cell with all alive neighbours', function(){
        var board = conway.createBoard(10)
        board[0][1] = true
        board[1][1] = true
        board[1][0] = true
        expect(conway.countAliveNeighbours(0, 0, board)).to.eq(3)
    })

})
describe('eachNeighbour', function () {
    it ('should return 8 neigbours', function () {
        var board = conway.createBoard(10)
        expect(conway.eachNeighbour(2,2, board).length).to.be(8) 
    })
    it ('should return 3 neigbours for a corner cell', function () {
        var board = conway.createBoard(10)
        expect(conway.eachNeighbour(0,0, board).length).to.be(3) 
    })
})
