import { firestore } from "@/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function useUploadProblem(){
    type Problem = {
		id: string;
		title: string;
		difficulty: string;
		category: string;
		order: number;
		videoId?: string;
	  };

	 const problems: Problem[] = [
		{ id: "two-sum", title: "Two Sum", difficulty: "Easy", category: "Array", order: 1, videoId: "8-k1C6ehKuw" },
		{ id: "reverse-linked-list", title: "Reverse Linked List", difficulty: "Hard", category: "Linked List", order: 2 },
		{ id: "jump-game", title: "Jump Game", difficulty: "Medium", category: "Dynamic Programming", order: 3 },
		{ id: "valid-parentheses", title: "Valid Parentheses", difficulty: "Easy", category: "Stack", order: 4, videoId: "xty7fr-k0TU" },
		{ id: "search-a-2d-matrix", title: "Search a 2D Matrix", difficulty: "Medium", category: "Binary Search", order: 5, videoId: "ZfFl4torNg4" },
		{ id: "container-with-most-water", title: "Container With Most Water", difficulty: "Medium", category: "Two Pointers", order: 6 },
		{ id: "merge-intervals", title: "Merge Intervals", difficulty: "Medium", category: "Intervals", order: 7 },
		{ id: "maximum-depth-of-binary-tree", title: "Maximum Depth of Binary Tree", difficulty: "Easy", category: "Tree", order: 8, videoId: "4qYTqOiRMoM" },
		{ id: "best-time-to-buy-and-sell-stock", title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Array", order: 9 },
		{ id: "subsets", title: "Subsets", difficulty: "Medium", category: "Backtracking", order: 10 },
	  ];

      	  // Automatic submission effect
	  useEffect(() => {
		const submitProblems = async () => {
		  try {
			// Iterate over each problem and submit it to Firestore
			for (const problem of problems) {
			  await setDoc(doc(firestore, "problems", problem.id), problem);
			}
	
			alert('All problems have been added successfully!');
		  } catch (error) {
			console.error("Error adding problems to Firestore: ", error);
			alert('Failed to add some problems.');
		  }
		};
	
		submitProblems();

	  }, []);
}