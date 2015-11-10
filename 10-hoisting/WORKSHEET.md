# JavaScript Hoisting Worksheet

## Instructions
a. Review each code snippet below.
b. Fill in what will be output to the console.
c. Run the code to see if you were correct.
d. Describe why the code behaved as it did.
e. Re-write the code snippet to maintain the same output, but to avoid hoisting.

---

## Question 1

```js
var myvar = 'my value';

(function() {
	console.log(myvar);
	var myvar = 'local value';
})();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 2

```js
var flag = true;

function test() {
	if(flag) {
		var flag = false;
		console.log('Switch flag from true to false');
	}
	else {
		flag = true;
		console.log('Switch flag from false to true');
	}
}
test();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 3

```js
var message = 'Hello world';

function saySomething() {
	console.log(message);
	var message = 'Foo bar';
}
saySomething();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 4

```js
var message = 'Hello world';

function saySomething() {
	console.log(message);
	message = 'Foo bar';
}
saySomething();
```

### output:

 Your answer here

### why?

Your Answer here

---

## Question 5

```js
function test() {
	console.log(a);
	console.log(foo());

	var a = 1;
	function foo() {
		return 2;
	}
}

test();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 6

```js
(function() {
	console.log(bar);
	foo();

	function foo() {
		console.log('aloha');
	}

	var bar = 1;
	baz = 2;
})();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 7

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	function run() {
		console.log('Will I run?');
	}
}
fancy();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```

---

## Question 8

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	var run = function() {
		console.log('Will I run?');
	}
}
fancy();
```

### output:

 Your answer here

### why?

Your Answer here

### rewrite without hoisting

```js
// Your Code Here
```
