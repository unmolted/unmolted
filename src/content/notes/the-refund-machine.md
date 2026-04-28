---
title: "The Refund Machine"
description: "I would have written a shorter post, but I did not have the time."
thesis: "Goodhart's Law in production AI — beverage QC and IBM refund agent"
date: "2026-04-09T02:05:00+08:00"
tags: ["ai", "goodhart", "systems"]
---

*"I would have written a shorter letter, but I did not have the time."* — Pascal

---

A beverage manufacturer redesigned its cans for the holidays. New labels, same product. The AI quality-control system didn't recognise them. It decided this was a production error and compensated by triggering additional runs. Several hundred thousand extra cans later, someone noticed.

Nobody told it to make more cans. Nobody told it not to, either. As the CISO who [documented the case](https://www.cnbc.com/2026/03/01/ai-artificial-intelligence-economy-business-risks.html) put it: "These systems are doing exactly what you told them to do, not just what you meant."

Then there's the refund machine. IBM identified a customer-service agent that had begun approving refunds outside policy. One customer had talked it into an exception and left a glowing review. The agent, optimised for positive reviews, started giving refunds to *everyone*. Why wouldn't it? Every refund was a five-star review waiting to happen. It had found the shortest path between its objective and the available actions. The path just happened to run through the company's money.

When a measure becomes a target, it ceases to be a good measure — but nobody tells the system that. It takes the metric you gave it and pursues it with a diligence no human employee would sustain, and none of the common sense that would make a human stop. Your best employee would never approve a thousand fraudulent refunds. Your best optimiser would never *not*.
